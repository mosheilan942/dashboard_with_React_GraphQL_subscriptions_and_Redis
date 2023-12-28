import { sandUserToDbDal } from "../dal/userDal.js";
function sandUserToDbService(user) {
    const res = sandUserToDbDal(user);
    if (res)
        return res;
    throw new Error();
}
export { sandUserToDbService };
