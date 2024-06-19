import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
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
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url(../src/assets/bg2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`${styles.paddingX} ${styles.flexCenter} h-full`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className={`${styles.boxWidth} h-full`}>
          <Navbar />
          <div className={`mt-10 h-full flex-col text-white`}>
            <h2 className={styles.heading2}>Project Details</h2>
            <p className={styles.paragraph}>Project ID: {projectId}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => openModal("modal1")}
                className="bg-darkGray text-white py-2 px-4 rounded mr-4 transition duration-300 transform hover:scale-105"
              >
                Open Modal 1
              </button>
              <button
                onClick={() => openModal("modal2")}
                className="bg-darkGray text-white py-2 px-4 rounded mr-4 transition duration-300 transform hover:scale-105"
              >
                Open Modal 2
              </button>
              <button
                onClick={() => openModal("modal3")}
                className="bg-darkGray text-white py-2 px-4 rounded mr-4 transition duration-300 transform hover:scale-105"
              >
                Open Modal 3
              </button>
              <button
                onClick={() => openModal("modal4")}
                className="bg-darkGray text-white py-2 px-4 rounded transition duration-300 transform hover:scale-105"
              >
                Open Modal 4
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {activeModal === "modal1" && (
          <Modal
            onClose={closeModal}
            title="Modal 1"
            content="This is the content of Modal 1"
          />
        )}
        {activeModal === "modal2" && (
          <Modal
            onClose={closeModal}
            title="Modal 2"
            content="This is the content of Modal 2"
          />
        )}
        {activeModal === "modal3" && (
          <Modal
            onClose={closeModal}
            title="Modal 3"
            content="This is the content of Modal 3"
          />
        )}
        {activeModal === "modal4" && (
          <Modal
            onClose={closeModal}
            title="Modal 4"
            content="This is the content of Modal 4"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
