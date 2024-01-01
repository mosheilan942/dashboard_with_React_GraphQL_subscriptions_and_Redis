import { get, set } from "../redis/redis.js";
import pubsub from "../pubsub/pubsub.js";
import {
    cpuData,
    regionData,
    messageData,
    trafficData,
} from "../utils/generator.js";
import { sandUserToDbController, getUserFromDb } from "../controllers/userControllers.js";
import { User } from "../mongoose/mongooseSchema.js";
import { GraphQLError } from 'graphql';




const COMPONENTS = {
    CPU: "cpu",
    TRAFFIC: "traffic",
    DISTRIBUTION: "distribution",
    MESSAGES: "messages",
};


const publishRandomData = async (generator: any, component: any) => {
    const data = generator();
    pubsub.publish(component, { [component]: data });
    await set(component, data);
    console.log("the data hes bean cached");
    return data;
};


const resolvers = {
    Query: {
        getUser: async (_: any, args: { user: User }, contextValue: any) => {
           console.log("args.input", args.user);
           const res = await getUserFromDb(args.user)
           return res
        }
    },
    Mutation: {
        // cpu: () => publishRandomData(cpuData, COMPONENTS.CPU),
        setUser: (_: any, args: { input: User }, contextValue: any) => {
            sandUserToDbController(args.input)
            console.log("contextValue.token", contextValue.token);
            if (contextValue.token!) {
                throw new GraphQLError('not admin!', {
                    extensions: { code: 'UNAUTHENTICATED' },
                });
            }
            return args.input
        }
    },
    Subscription: {
        cpu: {
            subscribe: () => pubsub.asyncIterator([COMPONENTS.CPU])
        },
    }
}

export default resolvers