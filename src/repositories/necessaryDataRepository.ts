import prisma from "../config/dataBase.js";


async function getAllCategories(){
    return await prisma.category.findMany();
}

async function getCategoryById(id:number){
    return await prisma.category.findUnique({
        where:{
            id:id,
        }
    })
}

async function getAllDisciplines(){
    return await prisma.disciplines.findMany();
}

async function getDisciplineById(id:number){
    return await prisma.disciplines.findUnique({
        where:{
            id:id,
        }
    })
}

async function getTeacherByDisciplines(disciplineId:number){
    return await prisma.teacherDisciplines.findMany({
        where:{
            disciplineId: disciplineId,
        },
        select: {
            teacher:    {
                select: {
                    id: true,
                    name: true,
                }
            }
        }
    })
}

async function getTeacherById(id:number){
    return await prisma.teacher.findUnique({
        where:{
            id:id,
        }
    })
}

export {getAllCategories,
    getAllDisciplines,
    getTeacherByDisciplines,
    getCategoryById,
    getDisciplineById,
    getTeacherById
};