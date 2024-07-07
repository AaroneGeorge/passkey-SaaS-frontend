import React, { useState, useEffect } from "react";
import { useAuth } from "../config/AuthContext";

const Modal = ({ onClose, title, projectId }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getProjectUsers, currentUser } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getProjectUsers(currentUser.uid, projectId);
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [projectId, getProjectUsers, currentUser]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-3xl w-full">
        <h2 className="text-2xl font-bold">{title}</h2>
        {loading ? (
          <p>Loading...</p>
        ) : users.length > 0 ? (
          <table className="mt-4 w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Username</th>
                <th className="border border-gray-300 px-4 py-2">CreatedAt</th>
                <th className="border border-gray-300 px-4 py-2">User ID</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.username}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.createdAt?.toDate().toLocaleString() || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.id}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users!</p>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-rose-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;