import React, { useState } from "react";
import { mortarboard } from "../../assets/index";
import { navlinksdata } from "../../constants/index";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-24 mx-auto sticky top-0 bg-gray-900 font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={mortarboard} alt="" className="w-20 h-auto m-4" />
      </div>
      <div>
        <ul className="hidden sm:flex items-center gap-10 m-4 ">
          {navlinksdata.map(({ id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-500"
              key={id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-white pr-4 z-10 sm:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-white ">
          {navlinksdata.map(({ id, title, link }) => (
            <li
              className="px-4 cursor-pointer capitalize py-6 text-xl  hover:text-designColor duration-500"
              key={id}
            >
              <Link
                onClick={() => setNav(!nav)}
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
