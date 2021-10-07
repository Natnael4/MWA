
const express = require("express");
const path = require("path");
require("./api/data/db")
const routes = require("./api/routes");

const app = express();

app.set("port", 8888);

app.use(express.static(path.join(__dirname, "public")));


app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));


app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});



app.use("/api", routes);

const server = app.listen(app.get("port"), function(){
    console.log("Listening to port " + server.address().port);
});
