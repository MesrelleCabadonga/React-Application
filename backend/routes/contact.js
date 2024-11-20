const express = require("express");
const router = express.Router();

let contacts = [
  {
    id: 1,
    name: "xyrelle Chui",
    email: "xyrelle2258@gmail.com",
    phone: "0917-123-4567",
  },
  {
    id: 2,
    name: "Ella sy",
    email: "ellasy22@gmail.com",
    phone: "0927-234-5678",
  },
  {
    id: 3,
    name: "messy cabadonga",
    email: "messy55@gmail.com",
    phone: "0917-345-6789",
  },
];

// Get all contacts
router.get("/", (req, res) => res.json(contacts));

// Add a contact
router.post("/", (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = { id: Date.now(), name, email, phone };
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// Delete a contact
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  contacts = contacts.filter((contact) => contact.id !== parseInt(id));
  res.status(200).json({ message: "Contact deleted" });
});

module.exports = router;