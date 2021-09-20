import express, { Express, Router } from "express";
import * as fs from 'fs'
import * as path from 'path';
import { StringRouter } from "./routes/string.router";

(async () => {
    const app: Express = express();
    const rootDirectory: string = path.join(__dirname, '../')
    const defaultValue = JSON.parse(fs.readFileSync(`${rootDirectory}config/default.json`, 'utf8'));
    const port: number = defaultValue.port;
    const basePath: string = defaultValue.baseRoute;

    const stringRouter: StringRouter = new StringRouter(app, basePath);

    app.use(stringRouter.router);

    app.listen(port, () => {
        console.log(`The application is listening on port ${port}`);
    })
}
)();


