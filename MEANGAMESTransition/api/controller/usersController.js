const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = mongoose.model("User");


module.exports.register = function (req, res) {
    console.log("controller register:");
    bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
        if (!err) {
            const newUser = {
                username: req.body.username,
                password: hashedPassword,
                name: req.body.name,
            };



            User.create(newUser, function (err, user) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(201).json(user);
                }
            })
        }

    })

}


module.exports.getAllUsers = function (req, res) {
 
    User.find().exec(function (err, users) {
        if (err) {
            console.log("Error finding users");
            res.status(500).json(err);
        } else {
            console.log("Found users", users.length);
            res.json(users);
        }
    });
};