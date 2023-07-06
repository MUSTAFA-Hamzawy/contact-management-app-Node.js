//  some configs
const {app, express} = require('./config/app');
require('dotenv').config();
const PORT = process.env.PORT || 8080;


// Listening for any request
app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`);
})