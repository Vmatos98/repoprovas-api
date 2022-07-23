import { Router } from 'express';

import jwtValidateMiddleware from '../middlewares/jwtValidateMiddleware.js';
import schemas from '../schemas/index.js';
import validateSchemasMiddleware from '../middlewares/validateSchemasMiddleware.js';

const dataRouter = Router();
dataRouter.get('/categories',jwtValidateMiddleware)

export default dataRouter;