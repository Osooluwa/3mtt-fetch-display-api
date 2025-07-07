import React, { useState, useEffect } from 'react';
import './App.css';
import ListComponent from './components/ListComponent';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const renderUser = (user) => (
    <li key={user.id}>
      <strong>{user.name}</strong> - {user.email}
    </li>
  );

  return (
    <div className="App">
      <h1>Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && (
        <ListComponent items={users} renderItem={renderUser} />
      )}
    </div>
  );
}

export default App;
