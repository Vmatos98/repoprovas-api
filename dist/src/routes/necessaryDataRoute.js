import { Router } from 'express';
import jwtValidateMiddleware from '../middlewares/jwtValidateMiddleware.js';
import * as controllers from '../controller/necessaryDataController.js';
const dataRouter = Router();
dataRouter.get('/categories', jwtValidateMiddleware, controllers.getCategories);
dataRouter.get('/discipline', jwtValidateMiddleware, controllers.getDisciplines);
dataRouter.get('/discipline/teacher/:id', jwtValidateMiddleware, controllers.getTeacherByDisciplines);
export default dataRouter;
