require("dotenv").config({"path":".env"});
const express = require("express");
const path = require("path");
require("./api/data/dbConnections")
const routes = require("./api/routes");



const app = express();

if (isNaN(process.env.PORT)){
    process.env.PORT = 6000;
}

process.env.PORT = process.env.PORT || 6000;


app.set("port", process.env.PORT);



app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

app.use("/api", routes);

const server = app.listen(app.get("port"), function(){
    const port = server.address().port;
    console.log("Listening to port " + port);
});