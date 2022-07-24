import {Tests} from '@prisma/client';
import * as repository from "../repositories/testsRepository.js"

export type createTestsData = Omit<Tests,'id'|'createdAt'>

async function insertTests(createTestsData:createTestsData){
    await repository.insertTests(createTestsData).catch(err=>{
    if(err.code === "P2002")
        throw { type: "conflict", message:"this card already exists"}
    });

}

async function getTestsByDisciplines(){
    const result = await repository.getTestsByDiscipline();
    if(!result)
    throw{type: "not_found", message: "not found"}

    return result;
}

async function getTestsByTeachers(){
    const result = await repository.getTestsByTeacher();
    if(!result)
    throw{type: "not_found", message: "not found"}

    return result;
}

export {
    insertTests,
    getTestsByDisciplines,
    getTestsByTeachers
}