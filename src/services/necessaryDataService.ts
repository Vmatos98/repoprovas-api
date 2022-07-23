import * as repository from '../repositories/necessaryDataRepository.js';


async function getAllCategories(){
    const result = await repository.getAllCategories();
    if(!result)
        throw{type: "not_found", message: "categories not found"}

    return result;
}


async function getAllDisciplines(){
    const result = await repository.getAllDisciplines();
    if(!result)
        throw{type: "not_found", message: "categories not found"}

    return result;
}

async function getTeacherByDisciplines(id:number){
    const result = await repository.getTeacherByDisciplines(id);
    if(!result)
        throw{type: "not_found", message: "categories not found"}

    return result;
}


export{
    getAllCategories,
    getAllDisciplines,
    getTeacherByDisciplines,
}