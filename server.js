//  some configs
const express = require('express');
const app = express();
const connectDB = require('./config/dbConnection');
const mongoose = require('mongoose');
const ErrorHandlerMiddleware = require('./middlewares/ErrorHandlerMiddleware');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const contactRoutes = require('./routes/contact');
const userRoutes = require('./routes/user');


// db connection
// connectDB();

// mongoose.connection.once('open', ()=>{
//     console.log('connected to db.');

    // Listening for any request, if connected to db successfully
    app.listen(PORT, ()=>{
        console.log(`Server is running on port : ${PORT}`);
    })

// })


app.use(express.json()); // Built-in Middleware To parse any request body

/***************************   Routes  *************************************/
app.use('/user', userRoutes)
app.use('/contacts', contactRoutes);


/***************************   Middlewares  *************************************/
app.use(ErrorHandlerMiddleware);