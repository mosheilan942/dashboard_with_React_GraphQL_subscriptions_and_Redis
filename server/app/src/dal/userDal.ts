import userModel from "../mongoose/model.js";
import { User } from "../mongoose/mongooseSchema.js";
import { comparePassword } from "../utils/bcrypt.js";

 
async function sandUserToDbDal(user:User) {
    const data = new userModel(user)
    data.save()
    const res = await userModel.findOne({email: user.email})
    if (res) return res
    throw new Error("error in sand user - dal")
}

async function getUserFromDbDal(user:User) {
    const res = await userModel.findOne({email: user.email})
    if (res?.password) {
        const compare = await comparePassword(user.password, res?.password)
        if (compare) return res
    }
    throw new Error("error in sand user - dal")
}

export { sandUserToDbDal, getUserFromDbDal }
