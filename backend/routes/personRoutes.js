const express = require("express");
const router = express.Router();
const { getAllPersons, createPerson, updatePerson, deletePerson } = require("../controllers/personController");

router.get("/person", getAllPersons);
router.post("/person", createPerson);
router.put("/person/:id", updatePerson);
router.delete("/person/:id", deletePerson);

module.exports = router;
