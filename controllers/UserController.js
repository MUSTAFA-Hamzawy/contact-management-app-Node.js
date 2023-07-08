const asyncHandler = require('express-async-handler');
const UserModel = require('../models/UserModel');


const getProfile = asyncHandler( async (req, res) => {
    res.send("profile Data");
})

const login = asyncHandler( async (req, res)=>{
    res.send("Login")
})

const register = asyncHandler( async (req, res)=>{
    res.send("register")
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