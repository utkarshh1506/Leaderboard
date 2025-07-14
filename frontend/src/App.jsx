import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserSelect from './components/UserSelect';
import AddUser from './components/AddUser';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/LeaderBoard';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [lastClaim, setLastClaim] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:1000/api/users');
    console.log("🔄 Fetched users:", res.data); 
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClaim = async () => {
    if (!selectedUser) return alert('Please select a user');

    const res = await axios.post(`http://localhost:1000/api/claim/${selectedUser}`);
    setLastClaim(res.data);
    await fetchUsers(); 
  };

  return (
    <div className="app-container">
      <div className="navbar">
        <h1>Gamefied</h1>
        <AddUser refreshUsers={fetchUsers} />
      </div>
      <div className="main">
        <UserSelect users={users} setSelectedUser={setSelectedUser} />
        <ClaimButton onClick={handleClaim} />
      </div>
      
      {lastClaim && (
        <div className="claim-result">
          {lastClaim.user.name} got <strong>{lastClaim.points}</strong> points!
        </div>
      )}
      <Leaderboard users={users} />
    </div>
  );
}

export default App;
