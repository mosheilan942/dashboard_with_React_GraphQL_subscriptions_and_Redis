import { User } from "../mongoose/mongooseSchema.js";
import { sandUserToDbDal } from "../dal/userDal.js";

function sandUserToDbService (user:User) {
    const res = sandUserToDbDal(user)
    if (res) return res
    throw new Error()
}

export  { sandUserToDbService }