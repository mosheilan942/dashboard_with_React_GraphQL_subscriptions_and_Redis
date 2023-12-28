import { RedisPubSub } from "graphql-redis-subscriptions";
import { config } from "dotenv";
config()


const pubsub = new RedisPubSub({
    connection: {
        host: process.env.REDIS_HOST || undefined,
        port: Number(process.env.REDIS_PORT) || undefined,
        password: process.env.REDIS_PASSWORD || undefined,        
    },
});



export default pubsub;