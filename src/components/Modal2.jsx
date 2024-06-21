import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const Modal2 = ({ onClose, title }) => {
  const steps = [
    {
      title: "step 1: INSTALL OUR NPM PACKAGE",
      code: "npm install passkey-linker",
    },
    {
      title: "step 2: COPY PASTE THESE CREDENTIALS",
      code: `DEVELOPER_ID = d-skj-9d14g2fe3\nPROJECT_ID = c18ed5dc-0f07-4127-bab9-a5e096632351`,
    },
    {
      title:
        "step 3: paste this into .env file and call them inside your project",
      code: "",
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // alert('Copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-3xl w-full">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="mt-4 space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="p-4 bg-gray-400 rounded-lg">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              {step.code && (
                <div className="mt-2 p-2 bg-gray-200 rounded-lg relative">
                  <pre className="font-mono">{step.code}</pre>
                  <FontAwesomeIcon
                    icon={faCopy}
                    className="absolute top-2 right-2 text-2xl text-blue-500 cursor-pointer hover:scale-110"
                    onClick={() => copyToClipboard(step.code)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
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

export default Modal2;
