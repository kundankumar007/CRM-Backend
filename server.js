const express = require("express");
const serverConfig = require("./configs/server.config");
const mongoose =require("mongoose");
const dbConfig = require("./configs/db.config");
const bodyParser = require ("body-parser");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})) ;
 


/**
 * setup the mongodb connection and create admin user
 */
mongoose.connect(dbConfig.DB_URL, ()=>{
    console.log("MongoDB connected");
});

require("./routes/auth.routes")(app)

/* start the express server*/
app.listen(serverConfig.PORT, () => {
    console.log("application has started on the port",serverConfig.PORT);
});