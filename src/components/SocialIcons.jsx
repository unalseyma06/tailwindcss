import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="social-icon-li bg-blue-600">
          <a className="social-icon-a" href="/">
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="social-icon-li bg-[#333333]">
          <a className="social-icon-a" href="/">
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="social-icon-li bg-blue-600">
          <a className="social-icon-a" href="/">
            Facebook <FaFacebook size={30} />
          </a>
        </li>
        <li className="social-icon-li bg-[#6fc2b0]">
          <a className="social-icon-a" href="/">
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="social-icon-li bg-[#565f69]">
          <a className="social-icon-a" href="/">
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;