import {Request, Response} from "express";
import * as service from "../services/necessaryDataService.js"

async function getCategories(req: Request, res: Response){
    const categories = await service.getAllCategories();
    res.status(200).send({categories:categories});
}

async function getDisciplines(req: Request, res: Response){
    const disciplines = await service.getAllDisciplines();
    res.status(200).send(disciplines);
}

async function getTeacherByDisciplines(req: Request, res: Response){
    const id = +req.params.id;
    const categories = await service.getTeacherByDisciplines(id);
    res.status(200).send(categories);
}

export{
    getCategories,
    getDisciplines,
    getTeacherByDisciplines
}