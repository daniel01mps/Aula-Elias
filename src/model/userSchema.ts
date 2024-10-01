import mongoose,{Document,Schema} from "mongoose";
import { IUser } from "../interface/User"


const UserSchema:Schema = new Schema({
    nome: String,
    email:String,
    idade:String,
    cpf:String,
    senha:String,
    cep:String,
  });

  
  const User = mongoose.model<IUser>('Usuario', UserSchema);

  export default User;
