import React from 'react';


const Leaderboard = ({ users }) => {
  const sorted = [...users].sort((a, b) => b.totalPoints - a.totalPoints);
  const topThree = sorted.slice(0, 3);
  const others = sorted.slice(3);

  const scrollables = others.length > 7 ? others.slice(0, others.length - 1) : others;
  const fixedLast = others.length > 7 ? others[others.length - 1] : null;

  return (
    <div className="leaderboard-container">

      {/* Top 3 Users */}
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

      {/* Scrollable Cards + Fixed Last */}
      <div className="card-list-wrapper">
        <div className="card-list">
          {scrollables.map((user, index) => (
            <div key={user._id} className="leaderboard-card">
              <div className="rank-circle">#{index + 4}</div>
              <div className="user-details-drop">
                <h3>{user.name}</h3>
                <p><strong>{user.totalPoints}</strong> pts</p>
              </div>
            </div>
          ))}
        </div>

        {fixedLast && (
          <div className="leaderboard-card fixed-last">
            <div className="rank-circle">#{scrollables.length + 4}</div>
            <div className="user-details-drop">
              <h3>{fixedLast.name}</h3>
              <p><strong>{fixedLast.totalPoints}</strong> pts</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
