import "dotenv/config";
import express from "express";
import cors from 'cors';
import { configureDb } from "./src/configs/Dbconfig.js";
import router from "./src/routers/router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(process.env.PORT, ()=> {
    configureDb();
    console.log(`listening on port ${process.env.port}`);
})