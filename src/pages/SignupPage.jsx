import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../style";
import { Navbar } from "../components";
import { useAuth } from "../config/AuthContext";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setSignupError("Passwords do not match. Please check and try again.");
        return;
      }

      await signUp(email, password, username);
      navigate("/Home");
    } catch (err) {
      setSignupError("An error occurred during signup. Please try again.");
      console.error(err);
    }
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: "url(./src/assets/bg1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${styles.paddingX} ${styles.flexCenter}`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-black bg-opacity-80 shadow-lg rounded-lg p-9 w-full max-w-3xl">
          <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center">
            Sign Up / Register
          </h2>
          <form className="mt-8" onSubmit={handleSignUp}>
            <div className="flex items-center mb-4">
              <label
                htmlFor="email"
                className="w-1/3 text-white text-sm font-bold mb-3"
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-2/3 px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline rounded"
              />
            </div>
            <div className="flex items-center mb-4">
              <label
                htmlFor="username"
                className="w-1/3 text-white text-sm font-bold mb-2"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-2/3 px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline rounded"
              />
            </div>
            <div className="flex items-center mb-4">
              <label
                htmlFor="password"
                className="w-1/3 text-white text-sm font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-2/3 px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline rounded"
              />
            </div>
            <div className="flex items-center mb-4">
              <label
                htmlFor="confirmPassword"
                className="w-1/3 text-white text-sm font-bold mb-2"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-2/3 px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </form>

          {signupError && (
            <p className="text-red-500 text-xs italic mt-4">{signupError}</p>
          )}

          <p className="mt-4 text-white text-center">
            Already have an account?{" "}
            <Link className="text-blue-500 hover:text-blue-700" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
