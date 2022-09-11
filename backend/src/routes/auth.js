import express from 'express';
import {googleAuth, login, register} from "../controllers/auth.js";
import 'express-async-errors';


const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/google", googleAuth)


export default router;