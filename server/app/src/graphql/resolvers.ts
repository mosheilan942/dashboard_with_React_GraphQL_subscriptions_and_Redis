import { get, set } from "../utils/redis.js";
import pubsub from "../pubsub/pubsub.js";
import {
    cpuData,
    regionData,
    messageData,
    trafficData,
} from "../utils/generator.js";
import { sandUserToDbController } from "../controllers/userControllers.js";
import { User } from "../mongoose/mongooseSchema.js";




const COMPONENTS = {
    CPU: "cpu",
    TRAFFIC: "traffic",
    DISTRIBUTION: "distribution",
    MESSAGES: "messages",
};


const publishRandomData = async (generator:any, component:any) => {
    const data = generator();
    pubsub.publish(component, { [component]: data });
    await set(component, data);
    console.log("the data hes bean cached");
    return data;
};


const resolvers = {
    Query: {
        getUser: () => ({name:"vbtuv", email:"4g4", password: "t4tbt"}),
    },
    Mutation: {
        cpu: () => publishRandomData(cpuData, COMPONENTS.CPU),
        setUser: (_:any, args: {input:User}) =>  {
            sandUserToDbController(args.input)
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