import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { routes } from "./routes";

const app = express();
createConnection();

app
    .use(bodyParser.json())
    .use(routes)

    .listen(3333, () => {
        console.log("Listening on http://localhost:3333");
    })
