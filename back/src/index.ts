import { AppDataSource } from "./config/data-source";
import {  HOST, PROTO } from "./config/envs";
import server from "./server/server";
import "reflect-metadata"

const port = Number(process.env.PORT) || 3000;

AppDataSource.initialize()
    .then(() => {
        server.listen(port, "0.0.0.0", () => {
            console.log(`Server is running on ${PROTO}://${HOST}:${port}`);
        });
    })
    .catch((error) => console.log(error));