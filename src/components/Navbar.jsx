import { useState } from "react";
import { close, logo, menu, security } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/" className="flex items-center">
        <img
          src={security}
          alt="passkeylinker"
          className="w-[35px] h-[35px] mr-2"
        />
        <p className="mr-1 font-bold text-white text-xl font-mono">PassKey</p>
        <p className="text-gradient font-bold text-xl font-mono">Linker</p>
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mr-10">
          <a href="/home">Home</a>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mr-10">
          <a
            href="https://www.npmjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mr-10">
          <a href="/#socials">Socials</a>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white">
          <a href="/login">Login</a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white mb-4">
              <a href="/Home">Home</a>
            </li>
            <li className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white mb-4">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </li>
            <li className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white mb-4">
              <a href="/#clients">Socials</a>
            </li>
            <li className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white">
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
