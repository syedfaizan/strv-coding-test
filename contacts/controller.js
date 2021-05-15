const express = require("express");
const router = express.Router();
const contactService = require("./service");

// routes
router.post("/user/:userId/contact", createContact);

module.exports = router;

function createContact(req, res, next) {
  let userId = req.params.userId;
  let contact = req.body;
  return contactService
    .createContact(contact, userId)
    .then((response) => {
      if (response) {
        return res.json(response);
      }
    })
    .catch(next);
}
