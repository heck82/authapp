module.exports.signUpUser = function(req, res) {
    console.log("trying to create user: " + req.body.name);
    require('../models/userModel').CreateUser(req.body, function(msg) {
        if (msg.code == 11000) {
            res.send("email already in use!");
        } else if (msg.name == "ValidationError") {
            res.send(msg.message);
        } else {
            res.send(msg);
        }
    });
};