import { Router } from "express";
import { activateAccount } from "../controllers/user.controllers.js";

const router = Router()

router.post('/activate-account', activateAccount)

export default router