import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './config/AuthContext';
import Root from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ErrorPage from "./pages/Error";
import PrivateRoute from "./config/PrivateRoute";

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/home" 
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/project/:projectId" 
          element={
            <PrivateRoute>
              <ProjectDetails />
            </PrivateRoute>
          } 
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;