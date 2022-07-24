import * as repository from '../repositories/necessaryDataRepository.js';


async function getAllCategories(){
    const result = await repository.getAllCategories();
    if(!result)
        throw{type: "not_found", message: "categories not found"}

    return result;
}

async function getCategoryById(id:number){
    const result = await repository.getCategoryById(id);
    if(!result)
        throw{type: "not_found", message: "categorie not found"}

    return result;
}


async function getAllDisciplines(){
    const result = await repository.getAllDisciplines();
    if(!result)
        throw{type: "not_found", message: "categories not found"}

    return result;
}

async function getDisciplineById(id:number){
    const result = await repository.getDisciplineById(id);
    if(!result)
        throw{type: "not_found", message: "discipline not found"}

    return result;
}

async function getTeacherByDisciplines(id:number){
    const result = await repository.getTeacherByDisciplines(id);
    if(!result)
        throw{type: "not_found", message: "categories not found"}

    return result;
}

async function getTeacherById(id:number){
    const result = await repository.getTeacherById(id);
    if(!result)
        throw{type: "not_found", message: "teacher not found"}

    return result;
}

export{
    getAllCategories,
    getAllDisciplines,
    getTeacherByDisciplines,
    getCategoryById,
    getDisciplineById,
    getTeacherById,
}