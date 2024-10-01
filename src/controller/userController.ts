import {Request,Response} from "express";
import * as userRepository from "../repository/userRepository"

export const getUsers = async (req:Request,res:Response):Promise<void> => {
    try{
        const users = await userRepository.findAll()
         res.status(200).send(users)
    } catch(error){
         res.status(500).send(`Deu error:${error}`)
    }
}