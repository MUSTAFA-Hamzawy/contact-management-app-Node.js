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
const status = require('./config/statusCodes');

// db connection
connectDB();

mongoose.connection.once('open', ()=>{
    console.log('connected to db.');

    // Listening for any request, if connected to db successfully
    app.listen(PORT, ()=>{
        console.log(`Server is running on port : ${PORT}`);
    })

})


app.use(express.json()); // Built-in Middleware To parse any request body

/***************************   Routes  *************************************/
app.use('/user', userRoutes)
app.use('/contacts', contactRoutes);



app.all('*', (req, res)=>{
    res.status(status.NOT_FOUND);
    throw new Error("Not found route.");
})
/***************************   Middlewares  *************************************/
app.use(ErrorHandlerMiddleware);