const { router } = require("../config/app");
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/ContactController");

router.get("/all", getContacts);
router.get("/:id", getContact);
router.post("/add", createContact);
router.put("/update/:id", updateContact);
router.delete("/delete/:id", deleteContact);

module.exports = router;
