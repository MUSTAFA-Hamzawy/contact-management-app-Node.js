const asyncHandler = require('express-async-handler');
const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const status = require('../config/statusCodes');
const jwt = require('jsonwebtoken');


const getProfile = asyncHandler( async (req, res) => {
    res.json(req.user);     // this data coming from the ValidateTokenMiddleware
})

// To validate the data used for login
const checkLoginData = async (data)=>{
    const {emailOrUsername, password} = data;
   
    if(!emailOrUsername) return "Email is required.";
    if(!password) return "Password is required.";
    

    return true;
}

const login = asyncHandler( async (req, res)=>{
    const {emailOrUsername, password} = req.body;
    const error = await checkLoginData({emailOrUsername, password});
    if(error != true){
        res.status(status.NOT_FOUND);
        throw new Error(error);
    }else{

        emailOrUsername.trim();
        const user = emailOrUsername.indexOf('@') == -1 ? await UserModel.findOne({username: emailOrUsername}) : await UserModel.findOne({email: emailOrUsername})
        const passwordIsCorrect = await bcrypt.compare(password, user.password);
        if(!user || !passwordIsCorrect){
            res.status(status.NOT_FOUND);
            throw new Error("Wrong email or password.");
        }     

        const token = jwt.sign(
            // Payload
            {
                id: user.id,
                username: user.username,
                email: user.email,
                phoneNumber: user.phoneNumber
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1h'} 
        )

        res.status(status.DEFAULT);
        res.json({token});
    }



})

const validateRegistrationData = async(data)=>{

    const{fullName, email, username, phoneNumber} = data;
    let errors = {};


    username.trim();

    // validate the name
    const nameRegex = /^(?!.*\s{2})[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    if(!fullName) return "Full name is required.";
    fullName.trim();
    if(!nameRegex.test(fullName)) return "Full name must contain only letters.";

    // Checking if user have already registered
    if(email == "" || email == undefined) return "Email is required";
    email.trim();
    if(await UserModel.findOne({email})) return "This email have already been taken.";


    // validate email using regex
    const emailRegex = /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(!emailRegex.test(email)) return "This email is invalid.";

    // validate username
    if(username == "" || username == undefined) return "Username is required";
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if(!usernameRegex.test(username)) return "This username is invalid."
    if(await UserModel.findOne({username})) return "This username is taken.";

    // validate phoneNumber
    if(! Number(phoneNumber)) return "Invalid phone number.";

    return true;
}

const register = asyncHandler( async (req, res)=>{
    const{fullName, email, username, phoneNumber, password} = req.body;


    const error = await validateRegistrationData({fullName, email, username, phoneNumber, password});
    if(error != true){
        res.status(status.NOT_FOUND);
        throw new Error(error);
    }

    // encrypting the password
    const SALT_ROUNDS = 10;
    const encryptedPW = await bcrypt.hash(password, SALT_ROUNDS);
    const createdUser = await UserModel.create({fullName, email, username, phoneNumber, password: encryptedPW});
    if(createdUser)
        res.status(status.CREATED).json(createdUser);
    else {
        res.status(status.NOT_FOUND);
        throw new Error("User data is invalid.")
    }

}
)
const logout = asyncHandler( async (req, res)=>{
    res.send("logout");
})




module.exports = {
    getProfile,
    login,
    logout,
    register
}