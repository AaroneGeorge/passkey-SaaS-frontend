import styles from "../style";
import { arrowUp } from "../assets";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const GetStarted = () => {
  const navigate = useNavigate(); // Utilize useNavigate hook for redirection

  const handleClick = () => {
    navigate("/login"); // Redirect to /login route on click
  };

  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:scale-110`}
      onClick={handleClick} // Attach onClick handler to the component itself
    >
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
