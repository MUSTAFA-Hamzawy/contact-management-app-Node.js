const status = require('../config/statusCodes');
const asyncHandler = require('express-async-handler');
const ContactModel = require('../models/ContactModel');

const getContacts = asyncHandler( async (req, res) => {
        const data = await ContactModel.find();
        res.status(status.DEFAULT).json(data);
})

const getContact = asyncHandler( async (req, res) =>  {
        const id = req.params.id;

        const data = await ContactModel.findById(id) || {};
        if(data) res.status(status.DEFAULT).json(data);
        else {
                res.status(status.NOT_FOUND);
                throw new Error("Not found id.");
        }
})

const createContact = asyncHandler( async (req, res) =>  {
    const {fullName, email, phoneNumber} = req.body;

    // Logic
    const data = await ContactModel.create({fullName, email, phoneNumber});
    return res.status(status.CREATED).json(data);
})

const updateContact = asyncHandler( async (req, res) =>  {
        const id = req.params.id;
        const contact = ContactModel.findById(id);
        if(!contact){
                res.status(status.NOT_FOUND);
                throw new Error("Not found contact.")
        }
        const updatedData = await ContactModel.findByIdAndUpdate(
                id,
                req.body,
                {new: true}
        );
        res.status(status.UPDATED).json(updatedData);

})
const deleteContact = asyncHandler( async (req, res) =>{ 
        const id = req.params.id;
        if(! ContactModel.findById(id)){
                res.status(status.NOT_FOUND);
                throw new Error("Not found contact.")
        }

        const result = await ContactModel.findByIdAndRemove(id);
        if(result)
                res.status(status.DEFAULT).json({deleted: 1})
        else
                res.status(status.NOT_FOUND).json({deleted: 0})


})



module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};