var router = require('express').Router();

router.route('/')
    .get(function(req, res) {
        res.sendFile('index.html', { root: __dirname });
    })
    .post(function(req, res) {
        switch (req.body.action) {
            case "CreateUser":
                require("../controllers/userConroll").signUpUser(req, res);
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