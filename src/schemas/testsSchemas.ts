import Joi from 'joi';

import {createTestsData} from "../services/testsService.js"

export const createTestSchema= Joi.object<createTestsData>({
    name: Joi.string().required(),
    pdfUrl: Joi.string().uri().required(),
    categoryId: Joi.number().required(),
    teacherId: Joi.number().required(),
    disciplineId: Joi.number().required(),
});