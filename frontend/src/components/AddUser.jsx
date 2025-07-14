import React, { useState } from "react";
import axios from "axios";

const AddUser = ({ refreshUsers }) => {
  const [name, setName] = useState("");

  const handleAdd = async () => {
    if (!name.trim()) return;
    await axios.post("http://localhost:1000/api/users", { name });
    setName("");
    refreshUsers();
  };

  return (
    <div className="add-user">
      <input
        type="text"
        value={name}
        placeholder="User Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add User</button>
    </div>
  );
};

export default AddUser;
