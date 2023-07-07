//  some configs
const {app, express} = require('./config/app');
const connectDB = require('./config/dbConnection');
const mongoose = require('mongoose');
const ErrorHandlerMiddleware = require('./middlewares/ErrorHandlerMiddleware');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const contactRoutes = require('./routes/contact');


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

app.use('/contacts', contactRoutes);

/***************************   Middlewares  *************************************/
app.use(ErrorHandlerMiddleware);