import React, { useState } from 'react';
import axios from 'axios';

const UpdatePersonForm = ({ person, onUpdate }) => {
  const [updatedPerson, setUpdatedPerson] = useState(person);

  const handleChange = (e) => {
    setUpdatedPerson({ ...updatedPerson, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:5000/api/person/${updatedPerson._id}`,
      updatedPerson
    );
    onUpdate();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h3>Update Person</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          value={updatedPerson.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          name="age"
          value={updatedPerson.age}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          name="gender"
          value={updatedPerson.gender}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="mobile"
          value={updatedPerson.mobile}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Update Person
      </button>
    </form>
  );
};

export default UpdatePersonForm;
