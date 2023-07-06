const {router, path} = require('../config/app');
const ContactController = require('../controllers/ContactController');


router.get('/all', ContactController.getContacts);
router.get('/:id', ContactController.getContact);
router.post('/add', ContactController.createContact)
router.put('/update/:id', ContactController.updateContact)
router.delete('/delete/:id', ContactController.delteContact)


module.exports = router;