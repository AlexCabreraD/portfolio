import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { scrollToSection } from "@/app/utils";

const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="flex-grow border-t border-t-1 border-gray-300"></div>
      <div
        className={
          "flex flex-row justify-between mt-[32px] md:space-x-[16px] md:justify-start "
        }
      >
        <button
          className={"hover:drop-shadow-glow"}
          onClick={() => {
            scrollToSection("about");
          }}
        >
          <p>About</p>
        </button>
        <button
          className={"hover:drop-shadow-glow"}
          onClick={() => {
            scrollToSection("tools");
          }}
        >
          <p>Skills</p>
        </button>
        <button
          className={"hover:drop-shadow-glow"}
          onClick={() => {
            scrollToSection("projects");
          }}
        >
          <p>Projects</p>
        </button>
        <button
          className={"hover:drop-shadow-glow"}
          onClick={() => {
            scrollToSection("contact");
          }}
        >
          <p>Contact</p>
        </button>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-[32px]">
          <div className="flex space-x-[32px] mt-[32px]">
            <a
              href="https://www.linkedin.com/in/cabrera-alejandro"
              target="_blank"
              rel="noopener noreferrer"
              className={"hover:drop-shadow-glow"}
            >
              <FaLinkedin className="w-6 h-6 hover:text-blue-500 hover:border-2 hover:bg-white hover:rounded" />
            </a>
            <a
              href="https://github.com/AlexCabreraD"
              target="_blank"
              rel="noopener noreferrer"
              className={"hover:drop-shadow-glow"}
            >
              <FaGithub className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a className={"hover:drop-shadow-glow"}>
              <MdMail className="w-6 h-6 hover:text-orange-300" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} Alejandro Cabrera. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
