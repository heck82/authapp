var express = require('express');
var router = express.Router();

router.route('/')
    .get(function(req, res) {
        res.sendFile('index.html', { root: __dirname });
    })
    .post(function(req, res) {
        switch (req.body.action) {
            case "CreateUser":
                console.log("trying to create user: " + req.body.name);
                require('../models/user').CreateUser(req.body, function(message) {
                    res.send(message);
                });
                break;
            case "Login":
                console.log("comparing user: " + req.body);
                break;
            default:
                console.log("send error");
        }
        // res.send(req.body);
    });

module.exports = router;