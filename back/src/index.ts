import { PORT, HOST, PROTO } from "./config/envs";
import server from "./server/server";

 server.listen(PORT, () => {
    console.log(`Server running on ${PROTO}://${HOST}:${PORT}`);
})