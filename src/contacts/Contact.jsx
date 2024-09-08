import React from "react";
import Title from "../layouts/Title";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <section
      id="contacts"
      className="w-full py-10 px-10 border-b-[1px] mx-2 border-b-gray-600 bg-bgColor"
      Contact
      me
    >
      <Title title="Contacts" des="Contacts" />
      <div className="">
        <div className="w-full  flex flex-col">
          <h2 className="font-bold text-3xl p-1 m-3">Let's Talk</h2>
          <p className="font-bodyFont text-[12px] sm:text-lg mx-2 text-left sm:text-left">
            I'm open to discussing Website Development projects, Data Analysis
            Jobs, Mathematical Related Tasks, Art Analysis or collaboration
            opportunities.
          </p>

          <div className="py-4 mx-2">
            <div className=" flex items-center gap-2 font-bodyFont text-[12px] ">
              <MdEmail className="text-cyan-500 text-[15px] sm:text-lg" />{" "}
              misheckmwas97@gmail.com
            </div>
            <div className="flex items-center gap-2 py-2 font-bodyFont text-[12px] ">
              <FaPhoneAlt className="text-green-400 text-[15px] sm:text-lg" />{" "}
              +254703197935
            </div>
            <div className="flex items-center gap-2 font-bodyFont text-[12px] ">
              <FaLocationDot className="text-red-700 text-[15px] sm:text-lg" />{" "}
              Nairobi, Kenya.
            </div>
          </div>
        </div>
        <div className="sm:w-3/4 flex w-full flex-col">
          <h2 className="font-bold text-3xl p-3 m-3">Reach Me</h2>
          <div className="p-2 m-2">
            <form
              action="https://getform.io/f/bdrylemb"
              method="POST"
              className="flex flex-col px-2 py-2"
            >
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="p-2 bg-gray-300 border-2 w-full font-bodyFont rounded-md text-black focus:outline-none"
              />
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="p-2 bg-gray-300 my-4 border-2 font-bodyFont rounded-md text-black focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter Your Message"
                rows="5"
                className="p-2 bg-gray-300 border-2 rounded-md font-bodyFont text-black focus:outline-none"
              ></textarea>
              <button className="group bg-gradient-to-r from-teal-500 font-bodyFont to-blue-500 w-fit px-6 py-3 my-2  flex items-center rounded-md text-white hover:scale-110 duration-300 ">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
