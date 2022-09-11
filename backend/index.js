import express from 'express';
import dotenv from 'dotenv';
import {connect} from "./db.js";
import {error} from "./src/middleware/error.js";
import {routes} from "./src/api/urls.js";
dotenv.config();

const app = express();
routes(app);
error(app);


app.listen(process.env.PORT, () => {
    connect();
    console.log(`Listening to : http://localhost:${process.env.PORT}`);
})