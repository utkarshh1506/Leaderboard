import React from 'react';

const UserSelect = ({ users, setSelectedUser }) => {
  return (
    <div className="user-select">
      <select onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Select User</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>
            {u.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;
