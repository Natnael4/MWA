require("dotenv").config({"path":".env"});
const mongoose = require("mongoose");
const dbURL = process.env.dbURL;
require("./games-model")


mongoose.connect(dbURL);

mongoose.connection.on("connected", function () {
    console.log("Mongoose connected to " + dbURL);
});
mongoose.connection.on("disconnected", function () {
    console.log("Mongoose disconnected");
});
mongoose.connection.on("error", function (err) {
    console.log("Mongoose connection error " + err);
});


process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected by app termination");
        process.exit(0);
    });
});


process.once("SIGUSR2", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected by app termination");
        process.kill(process.pid, "SIGUSR2");
    });
});