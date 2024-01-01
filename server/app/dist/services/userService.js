var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { sandUserToDbDal, getUserFromDbDal } from "../dal/userDal.js";
import { hashPassword } from "../utils/bcrypt.js";
function sandUserToDbService(user) {
    return __awaiter(this, void 0, void 0, function* () {
        user.password = yield hashPassword(user.password);
        const res = sandUserToDbDal(user);
        if (res)
            return res;
        throw new Error("error in sand user - service");
    });
}
function getUserFromDbService(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = getUserFromDbDal(user);
        if (res)
            return res;
        throw new Error("error in get user - service");
    });
}
export { sandUserToDbService, getUserFromDbService };
