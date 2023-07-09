const express = require('express');
const router = express.Router();
const ValidateTokenMiddleware = require('../middlewares/ValidateTokenMiddleware');

const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/ContactController");


router.use(ValidateTokenMiddleware);
router.get("/all", getContacts);
router.get("/:id", getContact);
router.post("/add", createContact);
router.put("/update/:id", updateContact);
router.delete("/delete/:id", deleteContact);

module.exports = router;
