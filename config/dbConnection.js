const mongoose = require('mongoose');


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });


    } catch (error) {
        console.error(error.message);
    }
}

module.exports = connectDB;
