var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "can't be blank"]
    },
    email: {
        type: String,
        required: [true, "can't be blank"],
        // validate: {
        //     isAsync: true,
        //     validator: function(v, cb) {
        //         User.find({ email: v }, function(err, docs) {
        //             cb(docs.length == 0);
        //         });
        //     },
        //     message: 'User already exists!'
        // },
        unique: true
    },
    password: {
        type: String,
        required: [true, "can't be blank"]
    }
});



module.exports = User = mongoose.model('User', UserSchema);



module.exports.CreateUser = function(body, cb) {
    console.log("BODY.name is: " + body.name);
    var newUser = new User({
        name: body.name,
        email: body.email,
        password: body.password
    });
    newUser.save(function(err, newUser) {
        if (err) {
            console.log(err.message);
            return cb(err.message);
        } else {
            console.log("Created new user: " + body.name);
            return cb("successfuly created: " + newUser.name);
        }
    });
};

// function checkUser(user){
//     User.findOne({email: user.email}, function(err, user){

//     })
// };

// UserSchema.pre('save', function (next) {
//     var self = this;
//     UserModel.find({name : self.name}, function (err, docs) {
//         if (!docs.length){
//             next();
//         }else{                
//             console.log('user exists: ',self.name);
//             next(new Error("User exists!"));
//         }
//     });
// }) ;