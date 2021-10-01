const MongoClient = require("mongodb").MongoClient; 
const dbName = "newTestDB";
const dburl = "mongodb://localhost:27017/" + dbName; 
var conn = null;
var open = function () {
    MongoClient.connect(dburl, { useUnifiedTopology: true }, function (err, client) {
        if (err) {
            console.log("DB connection failed");
            return;
        }
        conn = client.db(dbName);
        console.log("DB connection open", conn);
    });
};
var get = function () {
    return conn;
};
module.exports = {
    open: open, 
    get: get
};