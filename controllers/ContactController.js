const status = require('../config/statusCodes');
const asyncHandler = require('express-async-handler');


const getContacts = asyncHandler( async (req, res) => {
        res.status(status.DEFAULT).json(["any data"])
})

const getContact = asyncHandler( async (req, res) =>  {
        res.status(status.DEFAULT).json([req.params.id])
})

const createContact = asyncHandler( async (req, res) =>  {
    const {name, age} = req.body;
    
    // Handling Errors
    if(!name || !age){
        res.status(status.VALIDATION_ERROR)
        throw Error("All fields are required.");
    }

    // Logic
})

const updateContact = asyncHandler( async (req, res) =>  {
        res.status(status.UPDATED).json(["any data"])
})
const deleteContact = asyncHandler( async (req, res) =>{ 
        res.status(status.DEFAULT).json(["any data"])
})



module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};