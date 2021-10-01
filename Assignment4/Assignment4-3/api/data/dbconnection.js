const MongoClient = require("mongodb").MongoClient; 
const dbName = "newTestDB";
const dburl = "mongodb://localhost:27017/" + dbName; 
var_connection = null;
var open = function () {
    MongoClient.connect(dburl, { useUnifiedTopology: true }, function (err, client) {
        if (err) {
            console.log("DB connection failed");
            return;
        }
        _connection = client.db(dbName);
        console.log("DB connection open", _connection);
    });
};
var get = function () {
    return _connection;
};
module.exports = {
    open: open, 
    get: get
};