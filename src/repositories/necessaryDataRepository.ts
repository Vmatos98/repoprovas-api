import prisma from "../config/dataBase.js";


async function getAllCategories(){
    return await prisma.category.findMany();
}

async function getAllDisciplines(){
    return await prisma.disciplines.findMany();
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

export {getAllCategories,
    getAllDisciplines,
    getTeacherByDisciplines
};