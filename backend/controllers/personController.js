const Person = require("../models/personModel");

// Get all people
const getAllPersons = async (req, res) => {
  const persons = await Person.find();
  res.json(persons);
};

// Create a new person
const createPerson = async (req, res) => {
  const { name, age, gender, mobile } = req.body;
  const person = new Person({ name, age, gender, mobile });
  await person.save();
  res.status(201).json(person);
};

// Update a person
const updatePerson = async (req, res) => {
  const { id } = req.params;
  const updatedPerson = await Person.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedPerson);
};

// Delete a person
const deletePerson = async (req, res) => {
  const { id } = req.params;
  await Person.findByIdAndDelete(id);
  res.json({ message: "Person deleted" });
};

module.exports = { getAllPersons, createPerson, updatePerson, deletePerson };
