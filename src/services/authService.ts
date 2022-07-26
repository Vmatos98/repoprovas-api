import bcrypt from 'bcrypt';
import {User} from "@prisma/client"
import * as authRepository from "../repositories/authRepository.js";

export type createUserData = Omit<User, "id"|"createdAt">;
export type searchUserData = Omit<createUserData,"password">;

async function findUser(searchUserData:createUserData){
    const email = searchUserData.email;
    const user = await authRepository.findUser({email});
    if(bcrypt.compareSync(searchUserData.password, user.password)){
        return user;
    }
    throw { type: "unauthorized", message: "invalid email or password" };
}

async function findUserByEmail(searchUserData:searchUserData){
    const email = searchUserData.email;
    const user = await authRepository.findUser({email});
    return user;
}

async function createUser(createUserData:createUserData){
    const { email} = createUserData;
    const password = bcrypt.hashSync(createUserData.password, 10);
    const user = await authRepository.insertUser({email, password});
    return user;
}


export {
    findUser,
    createUser,
    findUserByEmail
};