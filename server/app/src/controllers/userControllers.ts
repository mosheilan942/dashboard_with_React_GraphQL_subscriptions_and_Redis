import { User } from "../mongoose/mongooseSchema.js";
import { sandUserToDbService, getUserFromDbService } from "../services/userService.js";
 

function sandUserToDbController(user:User) {
    try {
        const res = sandUserToDbService(user)
        return res
    } catch (error) {
        console.error(error);
        return error
    }
}

function getUserFromDb(user:User) {
    try {
        const res = getUserFromDbService(user)
        return res
    } catch (error) {
        console.error(error);
        return error
    }
}

export { sandUserToDbController, getUserFromDb }