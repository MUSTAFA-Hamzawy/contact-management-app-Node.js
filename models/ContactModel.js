const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ContactSchema = new schema(
    {
        user_id:{ // for the use who created this contact ( the current authenticated user)
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Id of the user is not provided."],
            ref: 'user'
        },
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