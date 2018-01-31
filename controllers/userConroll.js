var userModel = require('../models/model1');

module.exports.signup = function(req, res) {

    res.redirect('/success.html');

    // console.log("trying to create user: " + req.body.name);
    // userModel.CreateUser(req.body, function(msg) {
    //     if (msg.code == 11000) {
    //         res.send("email already in use!");
    //     } else if (msg.name == "ValidationError") {
    //         res.send(msg.message);
    //     } else {
    //         res.send(msg);
    //     }
    // });
};
module.exports.login = function(req, res) {
    res.send("you loged IN");
}