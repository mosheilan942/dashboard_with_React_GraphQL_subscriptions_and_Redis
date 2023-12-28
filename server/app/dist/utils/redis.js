var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Redis } from "ioredis";
import { config } from "dotenv";
config();
const redis = new Redis({
    host: process.env.REDIS_HOST || undefined,
    port: Number(process.env.REDIS_PORT) || undefined,
    password: process.env.REDIS_PASSWORD || undefined,
});
const get = (key) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield redis.get(key);
        if (data)
            return JSON.parse(data);
    }
    catch (e) {
        return null;
    }
});
const set = (key, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield redis.set(key, JSON.stringify(data));
        return true;
    }
    catch (e) {
        return false;
    }
});
export { get, set };
