import { useState } from "react";
import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: prevUsers.length + 1 }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {users.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold">{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export default Users;

