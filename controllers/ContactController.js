const status = require('../config/status_codes');

class ContactController{

    static getContacts(req, res){
         res.status(status.DEFAULT).json(["any data"])
    }

    static getContact(req, res) {
         res.status(status.DEFAULT).json([req.params.id])
    }

    static createContact(req, res) {
        const {name, age} = req.body;
        
        // Handling Errors
        if(!name || !age){
            res.status(status.VALIDATION_ERROR)
            throw Error("All fields are required.");
        }

        // Logic
   }

    static updateContact(req, res) {
         res.status(status.UPDATED).json(["any data"])
    }

    static delteContact(req, res) {
         res.status(status.DEFAULT).json(["any data"])
    }

}


module.exports = ContactController;