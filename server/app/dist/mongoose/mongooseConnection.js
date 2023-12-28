var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { connect } from "mongoose";
import { config } from "dotenv";
config();
const connectionString = process.env.CONNECTION_STRING;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
export default function checkConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const test = yield connect(connectionString);
            console.log('Connected to MongoDB');
            console.log(test.connection.readyState);
        }
        catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    });
}
