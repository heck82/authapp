var router = require('express').Router();

router.route('/')
    .get(function(req, res) {
        res.sendFile('index.html', { root: __dirname });
    })
    .post(function(req, res) {
        switch (req.body.action) {
            case "CreateUser":
                console.log("trying to create user: " + req.body.name);
                require('../models/user').CreateUser(req.body, function(msg) {
                    if (msg.code == 11000) {
                        res.send("email already in use!");
                    } else if (msg.name == "ValidationError") {
                        res.send(msg.message);
                    } else {
                        res.send(msg);
                    }
                });
                break;
            case "Login":
                console.log("comparing user: " + req.body.name);
                res.send(req.body);
                break;
            default:
                console.log("POST send error");
        }
        // res.send(req.body);
    });

module.exports = router;