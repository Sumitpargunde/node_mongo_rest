import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import PersonList from './components/PersonList';
import AddPersonForm from './components/AddPersonForm';
import UpdatePersonForm from './components/UpdatePersonForm';
import './styles.css';


const App = () => {
  const [editingPerson, setEditingPerson] = useState(null);

  return (
    <div className="container">
      <Header />
      <AddPersonForm onAdd={() => window.location.reload()} />
      {editingPerson ? (
        <UpdatePersonForm
          person={editingPerson}
          onUpdate={() => {
            setEditingPerson(null);
            window.location.reload();
          }}
        />
      ) : null}
      <PersonList
        onEdit={(person) => setEditingPerson(person)}
        onDelete={(id) => {
          fetch(`http://localhost:5000/api/person/${id}`, { method: 'DELETE' });
          window.location.reload();
        }}
      />
    </div>
  );
};

export default App;
