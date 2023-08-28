import React, { useState } from "react";

const mockUsers = [
    { id: 1, username: "johnDoe", email: "john@example.com", isAdmin: false },
    { id: 2, username: "janeDoe", email: "jane@example.com", isAdmin: true },
    { id: 3, username: "Martha", email: "jane@example.com", isAdmin: false },
    { id: 4, username: "Doug", email: "jane@example.com", isAdmin: true },
    { id: 5, username: "Febe", email: "jane@example.com", isAdmin: false },
    { id: 6, username: "Xoe", email: "jane@example.com", isAdmin: false },
  ];
  

const AdminProfile = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(mockUsers);

  const handleToggleAdmin = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, isAdmin: !user.isAdmin };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-smoke p-6 m-6 rounded flex flex-col">
       
      <h1 className="text-xl text-offWhite text-center font-bold">User Profile</h1>
      <div className="m-2 px-2 text-sm">
        <input
        className="rounded"
          type="text"
          placeholder="Search by Username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
        <div className='bg-offWhite p-4 mr-3 rounded '>
        <table className="min-w-full">
          <thead>
            <tr className='flex justify-between'>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Account Status</th>
            </tr>
          </thead>
          <tbody className="border-b border-dotted ">
            {filteredUsers.map((user) => (
              <tr key={user.id} className='flex justify-between'>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                <button
  onClick={() => handleToggleAdmin(user.id)}
  className={`${
    user.isAdmin ? "text-deepCoral" : "text-gray-500"
  } hover:text-yellow focus:outline-none`}
>
  {user.isAdmin ? "Admin" : "User"}
</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
</div>
      
      
    </div>
  );
};

export default AdminProfile;
