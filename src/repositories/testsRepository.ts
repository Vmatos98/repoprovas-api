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

async function getTestsByTeacher(){
    return await prisma.teacherDisciplines.findMany({
        include:{
            teacher:{select:{
                name:true,
                id:true,

            }},
            discipline:{include:{
                term:true,
                },
            },
            tests: {include: {
                category:true,
            }}
        }
    })
    // return await prisma.teacher.findMany({
    //     include: {
    //         tests: {include:{
    //             disciplines:true,
    //         }}
    //     }
    // })
}

export {
    insertTests,
    getTestsByDiscipline,
    getTestsByTeacher,
}