import {IUser} from "../interface/User";
import User from "../model/userSchema";

export const findAll = async () => {
    return User.find();
}