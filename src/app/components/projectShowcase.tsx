import { FaLock } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import projectImage from "../assets/jspro.jpg";
import previewProjectImage from "@/app/assets/jsproLanding.png";

import Image from "next/image";
import ModalComponent from "@/app/components/ModalComponent";
import { useState } from "react";

const ProjectShowcase = () => {
  const [showProjectPreview, setShowProjectPreview] = useState<boolean>(false);
  return (
    <div className="text-start text-white py-10 flex flex-col overlay-content">
      {showProjectPreview && (
        <ModalComponent
          onClose={() => setShowProjectPreview(false)}
          headerTitle={"JsProFinish-utah.com"}
          liveSiteUrl={"https://www.jsprofinish-utah.com/"}
          imageUrl={previewProjectImage.src}
        ></ModalComponent>
      )}
      <h2 className="mb-6 text-body-sm md:text-body">
        My Work
        <div className="border-t border-gray-300 w-1/4"></div>
      </h2>
      <div className="bg-[#181818] w-full max-w-5xl rounded-xl shadow-lg">
        <div className=" bg-[#181818] flex items-center px-4 py-2 rounded-t-xl">
          <div className="flex space-x-2">
            <BsCircleFill className="text-red-500" size={10} />
            <BsCircleFill className="text-yellow-500" size={10} />
            <button
              onClick={() => {
                setShowProjectPreview(true);
              }}
              className={"hover:cursor-pointer z-10"}
            >
              <BsCircleFill className="text-green-500" size={10} />
            </button>
          </div>
          <div
            className={
              "flex flex-1 w-full items-center justify-center ml-[-66px]"
            }
          >
            <FaLock className=" mr-3" />
            <a
              href={"https://www.jsprofinish-utah.com/"}
              target={"_blank"}
              className={"hover:drop-shadow-glow"}
            >
              JsProFinish-utah.com
            </a>
          </div>
        </div>

        <div
          className="px-2 pb-2 flex justify-center cursor-pointer"
          onClick={() => {
            setShowProjectPreview(true);
          }}
        >
          <Image
            src={projectImage.src}
            alt="Website Screenshot"
            className="w-full h-full object-cover rounded-lg"
            width={1440}
            height={1080}
            priority
          />
        </div>
      </div>
      <div>
        <div className="mt-[16px] rounded-b-xl">
          <div className={"flex flex-row justify-between"}>
            <p className="text-body-sm md:text-body">
              JSProFinish – Basement Finishing Solutions
            </p>
            <div className={"flex flex-row space-x-3"}>
              <a
                href={"https://github.com/AlexCabreraD/portfolio"}
                target={"_blank"}
              >
                <FaGithub size={20} className={"hover:drop-shadow-glow"} />
              </a>
              <a href={"https://www.jsprofinish-utah.com/"} target={"_blank"}>
                <LuExternalLink
                  size={20}
                  className={"hover:drop-shadow-glow"}
                />
              </a>
            </div>
          </div>

          <p className="text-[#4D4D4D] mt-[8px] text-body-sm md:text-body">
            A professional website for a basement finishing company in Utah,
            showcasing services, project galleries, and client testimonials.
            Optimized for SEO and performance to drive local search traffic and
            generate leads.
          </p>
          <ul className="text-[#4D4D4D] mt-[16px] text-body-sm md:text-body">
            <li className="mt-[16px]">Design: Relume, Figma</li>
            <li className="mt-[16px]">
              Front-end: React, Next.js, TypeScript, Tailwind CSS
            </li>
            <li className="mt-[16px]">Back-end: Node.js, Express</li>
            <li className="mt-[16px]">
              Hosting/Deployment: Vercel, GoDaddy (domain)
            </li>
            <li className="mt-[16px]">
              SEO Optimization: Core Web Vitals, Lighthouse performance tools
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
