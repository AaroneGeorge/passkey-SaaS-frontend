import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Modal2 from "../components/Modal2";
import Modal4 from "../components/Modal4";
import styles from "../style";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url(../src/assets/bg2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: 1 }}
      ></div>

      <div
        className={`${styles.paddingX} ${styles.flexCenter} h-full relative`}
        style={{ zIndex: 2 }}
      >
        <div className={`${styles.boxWidth} h-full`}>
          <Navbar />
          <div className={`mt-10 h-full flex-col text-white`}>
            <h2 className={styles.heading2}>Project Details</h2>
            <p className={styles.paragraph}>Project ID: {projectId}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => openModal("modal1")}
                className="font-poppins bg-darkGray text-white py-2 px-4 rounded mr-4 transition duration-300 transform hover:scale-105 hover:text-secondary"
              >
                Active Users
              </button>
              <button
                onClick={() => openModal("modal2")}
                className="font-poppins bg-darkGray text-white py-2 px-4 rounded mr-4 transition duration-300 transform hover:scale-105 hover:text-secondary"
              >
                Integration
              </button>
              {/* DOCUMENTATION BUTTON - REDIRECT TO A NOTION PAGE */}
              <button
                onClick={() => openModal("modal3")}
                className="font-poppins bg-darkGray text-white py-2 px-4 rounded mr-4 transition duration-300 transform hover:scale-105 hover:text-secondary"
              >
                Documentation
              </button>
              <button
                onClick={() => openModal("modal4")}
                className="font-poppins bg-darkGray text-white py-2 px-4 rounded mr-4 transition duration-300 transform hover:scale-105 hover:text-secondary"
              >
                Customize UI
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="font-poppins">
        {activeModal === "modal1" && (
          <Modal onClose={closeModal} title="Active Users" />
        )}
        {activeModal === "modal2" && (
          <Modal2
            onClose={closeModal}
            title="Modal 2"
          />
        )}
        {/* {activeModal === "modal3" && (
          <Modal
            onClose={closeModal}
            title="Modal 3"
            content="This is the content of Modal 3"
          />
        )} */}
        {activeModal === "modal4" && (
          <Modal4
            onClose={closeModal}
            title="Customizable UI components"
            content="Coming soon..."
          />
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
