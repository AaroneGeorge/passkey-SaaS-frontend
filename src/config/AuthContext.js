import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from './firebase'; 


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up function
  const signUp = async (email, password) => {
    // Implement your sign-up logic using Firebase auth
  };

  // Sign in function
  const signIn = async (email, password) => {
    // Implement your sign-in logic using Firebase auth
  };

  // Sign out function
  const signOut = async () => {
    // Implement your sign-out logic using Firebase auth
  };

  // Reset password function
  const resetPassword = async (email) => {
    // Implement your reset password logic using Firebase auth
  };

  // Update email function
  const updateEmail = async (email) => {
    // Implement your update email logic using Firebase auth
  };

  // Update password function
  const updatePassword = async (password) => {
    // Implement your update password logic using Firebase auth
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Value to be provided by the AuthContext
  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateEmail,
    updatePassword
  };


  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
