import { sandUserToDbService, getUserFromDbService } from "../services/userService.js";
function sandUserToDbController(user) {
    try {
        const res = sandUserToDbService(user);
        return res;
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
function getUserFromDb(user) {
    try {
        const res = getUserFromDbService(user);
        return res;
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
export { sandUserToDbController, getUserFromDb };
