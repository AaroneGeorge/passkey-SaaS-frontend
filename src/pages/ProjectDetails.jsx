import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Navbar, Modal, Modal2, Modal4 } from "../components";
import styles from "../style";
import { useAuth } from "../config/AuthContext";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";


const ProjectDetails = () => {
  const { projectId } = useParams();
  const location = useLocation();
  const projectName = location.state?.projectName || "Unknown Project";
  const [activeModal, setActiveModal] = useState(null);
  const { currentUser } = useAuth();
  const [documentId, setDocumentId] = useState(null);

  useEffect(() => {
    const fetchDocumentId = async () => {
      const db = getFirestore();
      const q = query(collection(db, `/devs/${currentUser?.uid}/projects`), where("projectId", "==", projectId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setDocumentId(doc.id);
      } else {
        console.log("No matching documents.");
      }
    };

    fetchDocumentId();
  }, [projectId]);

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
            <p className={styles.paragraph}>Project Name: {projectName}</p>
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
              <button
                className="font-poppins bg-darkGray text-white py-2 px-4 rounded mr-4 transition duration-300 transform hover:scale-105 hover:text-secondary"
              >
                <a href="https://ash-fork-f07.notion.site/Passkey_linker-Documentation-2a365607b5e149ed9d2109315b096974" target="_blank">
                  Documentation
                </a>
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
          <Modal
            onClose={closeModal}
            title="Active Users"
            projectId={projectId}
          />
        )}
        {activeModal === "modal2" && (
          <Modal2
            onClose={closeModal}
            title="Integration"
            developerId={currentUser?.uid}
            projectId={documentId}
          />
        )}
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
