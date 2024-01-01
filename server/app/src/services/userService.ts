import { User } from "../mongoose/mongooseSchema.js";
import { sandUserToDbDal, getUserFromDbDal } from "../dal/userDal.js";
import { hashPassword, comparePassword } from "../utils/bcrypt.js";

async function sandUserToDbService (user:User) {
    user.password = await hashPassword(user.password)
    const res = sandUserToDbDal(user)
    if (res) return res
    throw new Error("error in sand user - service")
}

async function getUserFromDbService(user:User) {
    const res = getUserFromDbDal(user)
    if (res) return res
    throw new Error("error in get user - service")
}

export  { sandUserToDbService, getUserFromDbService }