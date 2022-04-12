const express = require("express");
const serverConfig = require("./configs/server.config");
const mongoose =require("mongoose");
const dbConfig = require("./configs/db.config");
const app = express();

/**
 * setup the mongodb connection and create admin user
 */
mongoose.connect(dbConfig.DB_URL, ()=>{
    console.log("MongoDB connected");
});


/* start the express server*/
app.listen(serverConfig.PORT, () => {
    console.log("application has started on the port",serverConfig.PORT)
});