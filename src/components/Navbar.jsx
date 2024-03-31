import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="flex justify-between items-center px-4 text-gray-400 h-[80px] w-full fixed bg-[#254068] ">
      <div>
        <h2 className="text-3xl font-semibold">John Price</h2>
      </div>
      <ul className="hidden md:flex gap-3">
        <li>
        
          <Link smooth={true} duration={500} to="home">
            Home
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500} to="about">
            About
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500} to="work">
            Work
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500} to="skills">
            Skills
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500} to="contact">
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 h-screen w-full flex flex-col justify-center items-center bg-[#0a192f]"
        }
      >
        <li  className="py-6 text-4xl">
        <Link onClick={handleClick} smooth={true} duration={500} to="home">
            Home
          </Link>
        </li>
        <li  className="py-6 text-4xl">
        <Link onClick={handleClick} smooth={true} duration={500} to="about">
            About
          </Link>
        </li>
        <li  className="py-6 text-4xl">
        <Link onClick={handleClick} smooth={true} duration={500} to="work">
            Work
          </Link>
        </li>
        <li  className="py-6 text-4xl">
        <Link onClick={handleClick} smooth={true} duration={500} to="skills">
            Skills
          </Link>
        </li>
        <li  className="py-6 text-4xl">
        <Link onClick={handleClick} smooth={true} duration={500} to="contact">
            Contact
          </Link>
        </li>
      </ul>
      <SocialIcons />
    </div>
  );
};

export default Navbar;
