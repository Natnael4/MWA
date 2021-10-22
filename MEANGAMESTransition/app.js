
const express = require("express");
const path = require("path");
require("./api/data/db")
const cors = require("cors")
const routes = require("./api/routes");

const app = express();

app.set("port", 3000);

app.use(express.static(path.join(__dirname, "public")));

// app.use("/api",function(req,res,next){
//     res.header("Access-Control-Allow-origin","http://localhost:4200");
//     res.header("Access-Control-Allow-Methods","POST");
//     res.header("Access-Control-Allow-header","Origin,X-Requested-with, content-type,Accept","authorization");
//     next();
// });


app.use(cors());

app.use("/api", function (req, res, next) {
    res.header("Access-Control-Allow-origin", "http://localhost:4200");
    res.header(
      "Access-Control-Allow-header",
      "Origin,X-Requested-with, content-Type,Accept"
    );
    res.header("Access-Control-Allow-Methods:POST");
    res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
    next();
  });



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
