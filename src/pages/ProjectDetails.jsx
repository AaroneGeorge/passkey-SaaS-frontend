import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";

const ProjectDetails = () => {
  const { projectId } = useParams();

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(./src/assets/bg2.jpg)' }}>
      <div className="flex justify-center items-center h-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="bg-gray-100 p-4 rounded-md max-w-screen-lg mx-auto">
          <Navbar />
          <h2 className="text-2xl font-bold">Project Details</h2>
          <p className="mt-2">Project ID: {projectId}</p>
          {/* Add more project details here */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
