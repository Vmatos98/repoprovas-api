import { Router } from 'express';
import * as controllers from '../controller/testsController.js';
import schemas from '../schemas/index.js';
import validateSchemasMiddleware from '../middlewares/validateSchemasMiddleware.js';
import jwtValidateMiddleware from '../middlewares/jwtValidateMiddleware.js';

const testsRoute = Router();
testsRoute.post('/tests', jwtValidateMiddleware, validateSchemasMiddleware(schemas.createTestSchema), controllers.createTest);

export default testsRoute;