import React from 'react';

const Leaderboard = ({ users }) => {
  const sorted = [...users].sort((a, b) => b.totalPoints - a.totalPoints);
  const topThree = sorted.slice(0, 3);
  const others = sorted.slice(3);

  return (
    <div className="leaderboard-container">

      <div className="top-three">
        {topThree.map((user, index) => (
          <div key={user._id} className={`top-card rank-${index + 1}`}>
            <div className="rank-circle">#{index + 1}</div>
            <div className="user-details">
              <h3>{user.name}</h3>
              <p><strong>{user.totalPoints}</strong> pts</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card-list">
        {others.map((user, index) => (
          <div key={user._id} className="leaderboard-card">
            <div className="rank-circle">#{index + 4}</div>
            <div className="user-details-drop">
              <h3>{user.name}</h3>
              <p><strong>{user.totalPoints}</strong>pts</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
