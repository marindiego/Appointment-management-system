import { AppDataSource } from "./config/data-source";
import { PORT, HOST, PROTO } from "./config/envs";
import server from "./server/server";
import "reflect-metadata"


AppDataSource.initialize()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is running on ${PROTO}://${HOST}:${PORT}`);
        });
    })
    .catch((error) => console.log(error));