import React from 'react';

const Modal = ({ onClose, title }) => {
  const dummyData = [
    { username: 'user1', createdAt: '2024-01-01', userId: '1' },
    { username: 'user2', createdAt: '2024-01-02', userId: '2' },
    { username: 'user3', createdAt: '2024-01-03', userId: '3' },
    { username: 'user4', createdAt: '2024-01-04', userId: '4' },
    { username: 'user5', createdAt: '2024-01-05', userId: '5' },
    { username: 'user6', createdAt: '2024-01-06', userId: '6' },
    { username: 'user7', createdAt: '2024-01-07', userId: '7' },
    { username: 'user8', createdAt: '2024-01-08', userId: '8' },
    { username: 'user9', createdAt: '2024-01-09', userId: '9' },
    { username: 'user10', createdAt: '2024-01-10', userId: '10' },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-3xl w-full">
        <h2 className="text-2xl font-bold">{title}</h2>
        <table className="mt-4 w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Username</th>
              <th className="border border-gray-300 px-4 py-2">Created At</th>
              <th className="border border-gray-300 px-4 py-2">User ID</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                <td className="border border-gray-300 px-4 py-2">{user.createdAt}</td>
                <td className="border border-gray-300 px-4 py-2">{user.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-rose-700">Close</button>
      </div>
    </div>
  );
};

export default Modal;
