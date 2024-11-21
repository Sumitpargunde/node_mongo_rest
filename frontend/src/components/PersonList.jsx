import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const PersonList = ({ onEdit, onDelete }) => {
  const [persons, setPersons] = useState([]);

  const fetchPersons = async () => {
    const response = await axios.get('http://localhost:5000/api/person');
    setPersons(response.data);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-center mt-4">People List</h3>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person._id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.gender}</td>
              <td>{person.mobile}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(person)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(person._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default PersonList;
