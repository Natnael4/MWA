const express = require("express");
// const path = require("path");
const app = express();

app.set("port", 3000);


app.get("/:num", function(req, res){
    const num1 = parseInt(req.params.num);
    console.log("num1 is ", num1);
    

    const num2 = parseInt(req.query.rand);
    console.log("num2 is ", num2);
    const result = num1*num2;
    console.log(result);

    res.status(200).send(`The multiplication of ${num1} and ${num2} is: ${result}`);
});

const server = app.listen(app.get("port"), function () {
    const port = server.address().port;
    console.log("Listening to port", port);
})
