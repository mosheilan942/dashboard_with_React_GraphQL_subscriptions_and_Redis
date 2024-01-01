var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import userModel from "../mongoose/model.js";
import { comparePassword } from "../utils/bcrypt.js";
function sandUserToDbDal(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = new userModel(user);
        data.save();
        const res = yield userModel.findOne({ email: user.email });
        if (res)
            return res;
        throw new Error("error in sand user - dal");
    });
}
function getUserFromDbDal(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield userModel.findOne({ email: user.email });
        if (res === null || res === void 0 ? void 0 : res.password) {
            const compare = yield comparePassword(user.password, res === null || res === void 0 ? void 0 : res.password);
            if (compare)
                return res;
        }
        throw new Error("error in sand user - dal");
    });
}
export { sandUserToDbDal, getUserFromDbDal };
