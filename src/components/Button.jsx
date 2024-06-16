import React from "react";
import styles from "../style";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook



const Button = () => {
  const navigate = useNavigate()
  const handleClick = () => {  
    navigate("/login"); 
  };

  return (
    <button 
      type="button" 
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-3 ${styles}`}
      onClick={handleClick}
      >
        Get Started
    </button>
  )
}

export default Button;
