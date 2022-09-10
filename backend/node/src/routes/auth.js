import express from 'express';
import {login, register} from "../controllers/auth.js";
import 'express-async-errors';


const router = express.Router()

router.post("/register", register)
router.post("/login", login)


export default router;