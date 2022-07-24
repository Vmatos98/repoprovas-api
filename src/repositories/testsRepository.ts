import prisma from "../config/dataBase.js";
import {createTestsData} from "../services/testsService.js"

async function insertTests(createTestsData:createTestsData){
    return await prisma.tests.create({
        data: createTestsData,
    });
}

async function getTestsByDiscipline(){
    return await prisma.terms.findMany({
        include:{
            disciplines: {
                include: {
                    teachers:{include:{
                        teacher:true,
                        tests: {include: {category:true,}}
                        }
                    }
                },
            },
        },
    })
}

export {
    insertTests,
    getTestsByDiscipline
}