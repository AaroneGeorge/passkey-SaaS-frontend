import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from "./pages/root";
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import Home from "./pages/Home"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Root/>} />
      <Route path="/register" element={<SignupPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
