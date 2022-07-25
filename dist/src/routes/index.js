import { Router } from "express";
import authRoute from "./authRoute.js";
import dataRouter from "./necessaryDataRoute.js";
import testsRoute from "./testsRoute.js";
const router = Router();
router.use(authRoute);
router.use(dataRouter);
router.use(testsRoute);
export default router;
