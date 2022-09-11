import express from "express";
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express';
import authRoutes from "../routes/auth.js";
import userRoutes from '../routes/user.js';
import videoRoutes from '../routes/video.js';
import commentRoutes from '../routes/comment.js';
import cookieParser from 'cookie-parser';

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url);
const  swaggerFile =require('../../swagger-output.json');


export const routes = function (app){
    app.use(cookieParser());
    app.use(bodyParser.json())
    app.use(express.json());
    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile, { swaggerOptions: { persistAuthorization: true } }))
    app.use('/api/', authRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/videos', videoRoutes);
    app.use('/api/comments', commentRoutes);
}