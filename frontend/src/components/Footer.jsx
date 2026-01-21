import { assets } from "../assets/assets";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            delectus nostrum animi eaque temporibus maiores.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="flex items-center gap-2">
              <FiPhone className="text-gray-500" />
              <span>+880 1992113015</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-gray-500" />
              <span>pranto113015@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Forever. All rights reserved.
          <span className="ml-1">
            Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/pranto-kumar-a326801b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Pranto Kumar
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
