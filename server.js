const express = require("express");
const serverConfig = require("./configs/server.config");

const app = express();


/* start the express server*/
app.listen(serverConfig.PORT, () => {
    console.log("application has started on the port",serverConfig.PORT)
});