import { Redis, RedisKey } from "ioredis";
import { config } from "dotenv";
config()


const redis = new Redis({
    host: process.env.REDIS_HOST || undefined,
    port: Number(process.env.REDIS_PORT) || undefined,
    password: process.env.REDIS_PASSWORD || undefined,    
});

const get = async (key: RedisKey) => {
    try {
        const data = await redis.get(key);
        if (data)
        return JSON.parse(data);
    } catch (e) {
        return null;
    }
};

const set = async (key: RedisKey, data: any) => {
    try {
        await redis.set(key, JSON.stringify(data));
        return true;
    } catch (e) {
        return false;
    }
};

export { get, set }