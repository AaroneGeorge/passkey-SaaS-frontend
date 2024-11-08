import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components";
import styles from "../style";
import { useAuth } from "../config/AuthContext";
import bg1 from '../assets/bg1.jpg'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const navigate = useNavigate();
  const { signIn, resetPassword } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/Home");
    } catch (err) {
      setLoginError("Invalid email or password. Please try again.");
      console.log(err);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await resetPassword(email);
      setResetPasswordSuccess(true);
    } catch (err) {
      setLoginError("Error sending reset password email. Please try again.");
      console.log(err);
    }
  };

  return (
    <div
      className=""
      style={{
        backgroundImage:`url(${bg1})`,
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
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="bg-black bg-opacity-80 shadow-lg rounded-lg p-8 w-full max-w-2xl">
          <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center">
            Login
          </h2>
          <form className="mt-8" onSubmit={handleSignIn}>
            <div className="flex items-center mb-4">
              <label
                htmlFor="email"
                className="w-1/3 text-white text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                value={email}
                className="w-2/3 px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline rounded"
                onChange={(e) => setEmail(e.target.value)}
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
                className="w-2/3 px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline rounded"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <p
              className="forgot-password-link text-white text-center mt-4"
              onClick={handleForgotPassword}
            >
              <Link
                className="text-blue-500 hover:text-blue-700"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </Link>
            </p>
          </form>

          {loginError && (
            <p className="text-red-500 text-xs italic mt-4">{loginError}</p>
          )}
          {resetPasswordSuccess && (
            <p className="text-green-500 text-xs italic mt-4">
              Password reset email sent. Check your inbox.
            </p>
          )}

          <p className="mt-4 text-white text-center">
            Don't have an account?{" "}
            <Link className="text-blue-500 hover:text-blue-700" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
