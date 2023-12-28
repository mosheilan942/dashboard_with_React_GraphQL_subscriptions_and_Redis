import { model } from "mongoose";
import userSchema from "./mongooseSchema.js";
const userModel = model('User', userSchema);
export default userModel;
