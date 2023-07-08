const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, "Email is already registered"]
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, "Email is already registered"]
    },
    phoneNumber: {
        type: String,
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
}, {
    timestamps: true
})


module.exports = mongoose.model('UserModel', UserSchema);