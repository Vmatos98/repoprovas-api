import { Router } from "express";
import authRoute from "./authRoute.js";
import dataRouter from "./necessaryDataRoute.js";
const router = Router();

router.use(authRoute);
router.use(dataRouter);

export default router;