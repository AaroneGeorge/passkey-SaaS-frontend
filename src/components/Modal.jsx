import React from 'react';

const Modal = ({ onClose, title, content }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2">{content}</p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Close</button>
      </div>
    </div>
  );
};

export default Modal;
