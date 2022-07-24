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

export {
    createTest,
}