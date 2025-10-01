import React from "react";
import { assets } from "../assets/assets";
import { FiLogOut } from "react-icons/fi"; // logout icon

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="admin_logo" />

      <button
        onClick={() => setToken("")}
        className="flex items-center gap-2 bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm  hover:bg-gray-700 transition cursor-pointer"
      >
        <FiLogOut className="text-lg" /> {/* Icon */}
        Logout
      </button>
    </div>
  );
};

export default Navbar;
