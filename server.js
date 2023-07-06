//  some configs
const {app, express} = require('./config/app');
const ErrorHandlerMiddleware = require('./middlewares/ErrorHandlerMiddleware');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const contactRoutes = require('./routes/contact');




app.use(express.json()); // Built-in Middleware To parse any request body




/***************************   Routes  *************************************/

app.use('/contacts', contactRoutes);

/***************************   Middlewares  *************************************/
app.use(ErrorHandlerMiddleware);


// Listening for any request
app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`);
})