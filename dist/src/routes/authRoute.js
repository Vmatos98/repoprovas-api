import { Router } from 'express';
import * as controllers from '../controller/authController.js';
import schemas from '../schemas/index.js';
import validateSchemasMiddleware from '../middlewares/validateSchemasMiddleware.js';
const authRoute = Router();
authRoute.post("/login", validateSchemasMiddleware(schemas.loginSChema), controllers.login);
authRoute.post("/sigin", validateSchemasMiddleware(schemas.siginSChema), controllers.sigin);
export default authRoute;
