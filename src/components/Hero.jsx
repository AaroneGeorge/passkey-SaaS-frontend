import styles from "../style";
import GetStarted from "./GetStarted";
import lockIcon from "../assets/lock.jpg";
import lockGif from "../assets/lock_gif.webp"

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={lockIcon} alt="lock" className="w-[32px] h-[32px]" /> {/* Use the lock icon */}
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Secure</span> Your Account With{" "}
            <span className="text-white">Passkey</span> Authentication
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Pioneering<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Secure Access</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Solutions
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Introducing the Passkey Linker, designed for developers to seamlessly integrate robust passkey authentication into their apps.
          Simplify your security implementation with our user-friendly toolkit, ensuring your users enjoy the highest level of protection without the hassle.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={lockGif} alt="Lock GIF" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;