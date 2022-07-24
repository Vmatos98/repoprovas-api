import {Tests} from '@prisma/client';
import * as repository from "../repositories/testsRepository.js"

export type createTestsData = Omit<Tests,'id'|'createdAt'>

async function insertTests(createTestsData:createTestsData){
    await repository.insertTests(createTestsData).catch(err=>{
    if(err.code === "P2002")
        throw { type: "conflict", message:"this card already exists"}
    });

}

export {
    insertTests,
}