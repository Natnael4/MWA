const express = require("express");
const path = require("path");
const app = express();

app.set("port", 5353);

app.use(express.static(path.join(__dirname, "public")));



const server = app.listen(app.get("port"), function () {
    console.log("Listening to port " + server.address().port);
});

