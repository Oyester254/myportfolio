import React from "react";
import {
  FaGitSquare,
  FaInstagram,
  FaTwitterSquare,
  FaFacebookSquare,
  FaReact,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="flex flex-col justify-center items-center font-bodyFont">
        <h1 className="w-full text-3xl font-bold  text-cyan-500 flex justify-center items-center p-2">
          <FaReact></FaReact>
        </h1>
        <p className="py-4 text-center text-pink-600">React developer</p>
        <div className="flex justify-center md:w-[75%] my-6">
          <FaFacebookSquare size={30} className="p-2" />
          <FaInstagram size={30} className="p-2" />
          <FaGitSquare size={30} className="p-2" />
          <FaTwitterSquare size={30} className="p-2" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-7">
        <div>
          <h1 className="font-medium text-cyan-500">Personal Data</h1>
          <ul className="font-bodyFont">
            <li className=" py-2 text-sm">My profile</li>
            <li className=" py-2 text-sm">Email</li>
            <li className=" py-2 text-sm">Contacts</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-cyan-500">Support</h1>
          <ul className="font-bodyFont">
            <li className=" py-2 text-sm">Talents</li>
            <li className=" py-2 text-sm">Customer Help</li>
            <li className=" py-2 text-sm">FAQ</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-cyan-500">Notes</h1>
          <ul className="font-bodyFont">
            <li className=" py-2 text-sm">Whats New</li>

            <li className=" py-2 text-sm">Learning</li>
            <li className=" py-2 text-sm">DEv Tools</li>
          </ul>
        </div>
      </div>
      <div className="position-absolute flex flex-col justify-center items-center w-full">
        {/* <div className="flex flex-col justify-center items-center w-full">
        <p className="text-center sm:text-justify sm:text-[12px]  text-[10px]">
          &copy; 2024 Mish_254+. All rights reserved.
        </p>
      </div> */}
      </div>
    </div>
  );
};

export default Footer;
