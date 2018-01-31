var router = require('express').Router();
var ctrl = require("../controllers/userConroll");


router.route('/login.html').post(function(req, res){
    ctrl.login(req, res);
});

router.route('/signup.html').post(function(req, res){
    ctrl.signup(req, res);
});
// router.route('/signin')
//     .get(function(req, res) {
//         res.sendFile('index.html', { root: __dirname });
//     })
//     .post(function(req, res) {
//         switch (req.body.action) {
//             case "CreateUser":
//                 require("../controllers/userConroll").signUpUser(req, res);
//                 break;
//             case "Login":
//                 console.log("comparing user: " + req.body.name);

//                 res.send(req.body);
//                 break;
//             default:
//                 console.log("POST send error");
//         }
//         // res.send(req.body);
//     });

module.exports = router;