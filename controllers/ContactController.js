const status = require('../config/statusCodes');
const asyncHandler = require('express-async-handler');
const ContactModel = require('../models/ContactModel');

const getContacts = asyncHandler( async (req, res) => {
        const data = await ContactModel.find({user_id: req.user.id});
        res.status(status.DEFAULT).json(data);
})

const getContact = asyncHandler( async (req, res) =>  {
        const id = req.params.id;
        const currentUserId = req.user.id;
        const data = await ContactModel.findOne({id}) || {};

        if(data.user_id.toString() != currentUserId){
                res.status(status.UNAUTHORIZED);
                throw new Error("User is not authorized to fetch this contact.")
        }

        if(data) res.status(status.DEFAULT).json(data);
        else {
                res.status(status.NOT_FOUND);
                throw new Error("Not found id.");
        }
})

const createContact = asyncHandler( async (req, res) =>  {
    const {fullName, email, phoneNumber} = req.body;
    const currentUserId = req.user.id; 

    // Logic
    const data = await ContactModel.create({fullName, email, phoneNumber, user_id: currentUserId});
    return res.status(status.CREATED).json(data);
})

const updateContact = asyncHandler( async (req, res) =>  {
        const id = req.params.id;
        const currentUserId = req.user.id;
        const contact = await ContactModel.findOne({id});

        if(!contact){
                res.status(status.NOT_FOUND);
                throw new Error("Not found contact.")
        }
        
        if(contact.user_id.toString() != currentUserId){
                res.status(status.UNAUTHORIZED);
                throw new Error("User is not authorized to update this contact.")
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
        const currentUserId = req.user.id;
        const contact = await ContactModel.findOne({id});
        if(! contact){
                res.status(status.NOT_FOUND);
                throw new Error("Not found contact.")
        }

        if(contact.user_id.toString() != currentUserId){
                res.status(status.UNAUTHORIZED);
                throw new Error("User is not authorized to delete this contact.")
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