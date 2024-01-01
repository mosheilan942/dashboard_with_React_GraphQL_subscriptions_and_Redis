var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { set } from "../redis/redis.js";
import pubsub from "../pubsub/pubsub.js";
import { sandUserToDbController, getUserFromDb } from "../controllers/userControllers.js";
import { GraphQLError } from 'graphql';
const COMPONENTS = {
    CPU: "cpu",
    TRAFFIC: "traffic",
    DISTRIBUTION: "distribution",
    MESSAGES: "messages",
};
const publishRandomData = (generator, component) => __awaiter(void 0, void 0, void 0, function* () {
    const data = generator();
    pubsub.publish(component, { [component]: data });
    yield set(component, data);
    console.log("the data hes bean cached");
    return data;
});
const resolvers = {
    Query: {
        getUser: (_, args, contextValue) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("args.input", args.user);
            const res = yield getUserFromDb(args.user);
            return res;
        })
    },
    Mutation: {
        // cpu: () => publishRandomData(cpuData, COMPONENTS.CPU),
        setUser: (_, args, contextValue) => {
            sandUserToDbController(args.input);
            console.log("contextValue.token", contextValue.token);
            if (contextValue.token) {
                throw new GraphQLError('not admin!', {
                    extensions: { code: 'UNAUTHENTICATED' },
                });
            }
            return args.input;
        }
    },
    Subscription: {
        cpu: {
            subscribe: () => pubsub.asyncIterator([COMPONENTS.CPU])
        },
    }
};
export default resolvers;
