import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../style";
import { useAuth } from "../config/AuthContext";
import bg1 from '../assets/bg1.jpg'

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const navigate = useNavigate();
  const { createProject, getProjects } = useAuth();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleCreateProject = () => {
    setIsCreatingProject(true);
  };

  const handleProjectNameSubmit = async () => {
    try {
      const newProject = await createProject(newProjectName);
      setProjects([...projects, newProject]);
      setNewProjectName("");
      setIsCreatingProject(false);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const handleProjectClick = (project) => {
    navigate(`/project/${project.projectId}`, { state: { projectName: project.projectName } });
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div
        className={`${styles.paddingX} ${styles.flexCenter} h-full`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className={`${styles.boxWidth} h-full`}>
          <Navbar />
          <div className={`${styles.padding} mx-auto`}>
            <div className="mt-8">
              <h2 className={`${styles.heading2}`}>Create Project</h2>
              {isCreatingProject ? (
                <div className="mt-4 bg-gray-100 p-4 rounded-md">
                  <h2 className="font-poppins  text-[24px] text-black leading-[36.8px]">
                    Let's start with the name of your project
                  </h2>
                  <input
                    type="text"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    placeholder="Enter project name"
                    className="border border-gray-300 rounded-md px-2 py-1 mt-2 w-full"
                  />
                  <button
                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-900 transition duration-300 mt-3 mr-2"
                    onClick={handleProjectNameSubmit}
                  >
                    Submit
                  </button>
                  <button
                    className="bg-gray-600 text-white font-semibold py-2 px-4 rounded hover:bg-gray-800 transition duration-300 mt-2"
                    onClick={() => setIsCreatingProject(false)}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <button
                  className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300 mt-4"
                  onClick={handleCreateProject}
                >
                  Add Project
                </button>
              )}
              <div className="mt-4 grid grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    onClick={() => handleProjectClick(project)}
                    className="bg-white border border-gray-300 rounded-md p-4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  >
                    <h3 className="font-poppins font-semibold text-[24px] text-black leading-[36.8px]">
                      {project.projectName}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
