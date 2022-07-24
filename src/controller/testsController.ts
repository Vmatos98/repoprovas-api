import {Request, Response} from "express";

import * as testsService from "../services/testsService.js";
import * as dataService from "../services/necessaryDataService.js"

async function createTest(req:Request, res: Response) {
    const {categoryId, disciplineId, teacherId} = req.body;
    await dataService.getCategoryById(categoryId);
    await dataService.getDisciplineById(disciplineId);
    await dataService.getTeacherById(teacherId);
    await testsService.insertTests(req.body);
    res.sendStatus(201);
}

async function getTestsByGroup(req: Request, res: Response) {
    const {groupBy} = req.query;
    if(groupBy ==='disciplines'){
        const data = await testsService.getTestsByDisciplines();
        const result={
            tests:data,
        }
        return res.status(200).send(result);
    }
        // throw{type: "bad_request", message: "not data found"};
    
    
}

export {
    createTest,
    getTestsByGroup
}