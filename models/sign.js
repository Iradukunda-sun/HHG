const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const signupSchema = new mongoose.Schema({
    theName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
    },
    mobileNumber: {
        type: Number,
        trim: true,

    },
    branch: {
        type: String,

    },
    role: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    }
});


signupSchema.plugin(passportLocalMongoose, {
    usernameField: 'email',
});


module.exports = mongoose.model('Signup', signupSchema);





















signupSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
});