import { User } from "../mongoose/mongooseSchema.js";
import { sandUserToDbService } from "../services/userService.js";


function sandUserToDbController(user:User) {
    try {
        const res = sandUserToDbService(user)
        return res
    } catch (error) {
        console.error(error);
        return error
    }
}

export { sandUserToDbController }