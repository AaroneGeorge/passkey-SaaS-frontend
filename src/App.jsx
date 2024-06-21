import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ErrorPage from "./pages/Error";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/project/:projectId" element={<ProjectDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default App;
