import React, { useState } from 'react';
import axios from 'axios';

const AddPersonForm = ({ onAdd }) => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
    gender: '',
    mobile: '',
  });

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/person', person);
    onAdd();
    setPerson({ name: '', age: '', gender: '', mobile: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h3>Add New Person</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Name"
          value={person.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          name="age"
          placeholder="Age"
          value={person.age}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          name="gender"
          value={person.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="mobile"
          placeholder="Mobile"
          value={person.mobile}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Person
      </button>
    </form>
  );
};

export default AddPersonForm;
