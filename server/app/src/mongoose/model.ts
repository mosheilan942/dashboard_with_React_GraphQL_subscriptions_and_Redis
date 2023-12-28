import mongoose, { Schema, model, connect } from "mongoose";
import userSchema, { User } from "./mongooseSchema.js";


const userModel = model<User>('User', userSchema);

export default userModel

