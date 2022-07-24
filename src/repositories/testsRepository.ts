import prisma from "../config/dataBase.js";
import {createTestsData} from "../services/testsService.js"

async function insertTests(createTestsData:createTestsData){
    return await prisma.tests.create({
        data: createTestsData,
    });
}


export {
    insertTests,
}