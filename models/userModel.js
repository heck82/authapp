var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: function(v) {
                return /^[^!@#$%^&*()~\,\?\|/\\\+\=]+$/.test(v);
            },
            message: '{VALUE} is not a valid name'
        },
        required: [true, "can't be blank"]
    },
    email: {
        type: String,
        required: [true, "can't be blank"],
        validate: {
            validator: function(v) {
                return /^\S+@\S+\.\w+$/.test(v);
            },
            message: "{VALUE} Invalid email"
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, "can't be blank"],
        validate: {
            validator: function(v) {
                return /^(?=.*\d)(?=.*[A-z]).{8,32}$/.test(v);
            },
            message: "Invalid pass"
        }
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
    newUser.save(function(err) {
        if (err) {
            return cb(err);
        } else {
            console.log("Created new user: " + body.name);
            return cb("successfuly created: " + body.name);
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