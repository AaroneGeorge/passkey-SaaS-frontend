import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateEmail as firebaseUpdateEmail,
  updatePassword as firebaseUpdatePassword,
} from "firebase/auth";
import {
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  collection,
  query, 
  where,
  addDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = async (email, password, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Create a new document in the 'devs' collection
      await setDoc(doc(db, "devs", user.uid), {
        email: user.email,
        username: username,
        createdAt: serverTimestamp(),
        DEVELOPER_ID: user.uid,
      });

      return user;
    } catch (error) {
      throw error;
    }
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = () => {
    return firebaseSignOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateEmail = (email) => {
    return firebaseUpdateEmail(currentUser, email);
  };

  const updatePassword = (password) => {
    return firebaseUpdatePassword(currentUser, password);
  };

  const createProject = async (projectName) => {
    if (!currentUser) throw new Error("No user logged in");

    const projectRef = collection(db, `devs/${currentUser.uid}/projects`);
    const newProject = {
      projectName,
      projectId: uuidv4(),
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(projectRef, newProject);
      return newProject;
    } catch (error) {
      throw error;
    }
  };

  const getProjects = async () => {
    if (!currentUser) throw new Error("No user logged in");

    const projectsRef = collection(db, `devs/${currentUser.uid}/projects`);
    try {
      const snapshot = await getDocs(projectsRef);
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      throw error;
    }
  };

  const getProjectUsers = async (developerId, projectId) => {
    try {
      // First, get the developer document
      const devDocRef = doc(db, "devs", developerId);
      const devDocSnap = await getDoc(devDocRef);
  
      if (!devDocSnap.exists()) {
        console.log("No such developer!");
        return [];
      }
  
      // Now, get the project document
      const projectsRef = collection(devDocRef, "projects");
      const projectQuery = query(projectsRef, where("projectId", "==", projectId));
      const projectSnapshot = await getDocs(projectQuery);
  
      if (projectSnapshot.empty) {
        console.log("No matching project found");
        return [];
      }
  
      const projectDoc = projectSnapshot.docs[0];
  
      // Construct the path to the users subcollection
      const usersRef = collection(db, `devs/${devDocSnap.id}/projects/${projectDoc.id}/users`);
      const usersSnapshot = await getDocs(usersRef);
  
      if (usersSnapshot.empty) {
        console.log("No users found for this project");
        return [];
      }
  
      return usersSnapshot.docs.map(doc => ({
        id: doc.data().id,
        username: doc.data().username,
        createdAt: doc.data().createdAt
      }));
    } catch (error) {
      console.error("Error fetching project users:", error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateEmail,
    updatePassword,
    createProject,
    getProjects,
    getProjectUsers,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
