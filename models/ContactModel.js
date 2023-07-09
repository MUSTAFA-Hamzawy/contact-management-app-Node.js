const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ContactSchema = new schema(
    {
        fullName: {
            type: String,
            required: [true, "Please enter your full name."]
        },
        email: {
            type: String,
            required: [true, "Email is required."]
        },
        phoneNumber: {
            type: String
        }
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('contact', ContactSchema);