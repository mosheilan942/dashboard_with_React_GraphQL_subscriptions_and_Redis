var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { set } from "../utils/redis.js";
import pubsub from "../pubsub/pubsub.js";
import { cpuData, } from "../utils/generator.js";
import { sandUserToDbController } from "../controllers/userControllers.js";
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
        getUser: () => ({ name: "vbtuv", email: "4g4", password: "t4tbt" }),
    },
    Mutation: {
        cpu: () => publishRandomData(cpuData, COMPONENTS.CPU),
        setUser: (_, args) => {
            sandUserToDbController(args.input);
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
