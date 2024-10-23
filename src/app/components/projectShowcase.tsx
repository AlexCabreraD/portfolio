import { FaLock } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import jsproPreview from "../assets/jspro.jpg";
import retrospectivePreview from "../assets/retrospective.jpg";
import jsProPreviewProjectImage from "@/app/assets/jsproLanding.png";
import restrospectivePreviewProjectImage from "@/app/assets/retrospectiveFullPreview.jpg";

import Image from "next/image";
import ModalComponent from "@/app/components/ModalComponent";
import { Dispatch, SetStateAction, useState } from "react";

interface AdditionalInfo {
  label: string;
  items: string[];
}

interface projectTileProps {
  setShowProjectPreview: Dispatch<SetStateAction<boolean>>;
  setPreviewUrl: Dispatch<SetStateAction<string>>;
  title: string;
  name: string;
  description: string[];
  url: string;
  additionalInfo: AdditionalInfo[];
  imgPath: string;
  setModalPreviewUrl: Dispatch<SetStateAction<string>>;
  modalPreviewImgPath: string;
  setModalPreviewTitle: Dispatch<SetStateAction<string>>;
  setModalPreviewLiveUrl: Dispatch<SetStateAction<string>>;
}

const ProjectTile = ({
  setShowProjectPreview,
  setPreviewUrl,
  title,
  name,
  description,
  url,
  additionalInfo,
  imgPath,
  setModalPreviewUrl,
  modalPreviewImgPath,
  setModalPreviewTitle,
  setModalPreviewLiveUrl,
}: projectTileProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <>
      <div className="bg-[#181818] w-full max-w-5xl rounded-xl shadow-lg border mt-6">
        <div className="bg-[#181818] flex items-center px-4 py-2 rounded-t-xl">
          <div className="flex space-x-2">
            <BsCircleFill className="text-red-500" size={10} />
            <BsCircleFill className="text-yellow-500" size={10} />
            <button
              onClick={() => {
                setPreviewUrl(url);
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
            <FaLock className="mr-3" />
            <a
              href={url}
              target={"_blank"}
              className={"hover:drop-shadow-glow"}
            >
              {title}
            </a>
          </div>
        </div>

        <div
          className="px-2 pb-2 flex justify-center cursor-pointer"
          onClick={() => {
            setModalPreviewUrl(modalPreviewImgPath);
            setModalPreviewTitle(title);
            setModalPreviewLiveUrl(url);
            setShowProjectPreview(true);
          }}
        >
          <Image
            src={imgPath}
            alt="Website Screenshot"
            className="w-full h-full object-cover rounded-lg"
            width={1440}
            height={1080}
            priority
          />
        </div>
      </div>

      <div className="mt-[16px] rounded-b-xl">
        <div className={"flex flex-row justify-between"}>
          <p className="text-body-sm md:text-body">{name}</p>
          <div className={"flex flex-row space-x-3"}>
            <a
              href={"https://github.com/AlexCabreraD/portfolio"}
              target={"_blank"}
            >
              <FaGithub size={20} className={"hover:drop-shadow-glow"} />
            </a>
            <a href={url} target={"_blank"}>
              <LuExternalLink size={20} className={"hover:drop-shadow-glow"} />
            </a>
          </div>
        </div>

        <p className="text-[#999999] mt-[8px] text-body-sm md:text-body">
          {description[0]}
        </p>

        {showMore &&
          description.slice(1).map((line, index) => (
            <p
              key={index}
              className="text-[#999999] mt-[8px] text-body-sm md:text-body"
            >
              {line}
            </p>
          ))}

        {description.length > 1 && (
          <button
            className="text-blue-500 mt-2 hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Read less" : "Read more"}
          </button>
        )}

        <ul className="text-[#4D4D4D] mt-[16px] text-body-sm md:text-body">
          {additionalInfo.map((info, index) => (
            <li key={index} className="mt-[16px]">
              <strong>{info.label}: </strong>
              {info.items.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

//TODO: ADD DYNAMIC ModalComponent IMG
const ProjectShowcase = () => {
  const [showProjectPreview, setShowProjectPreview] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [modalPreviewUrl, setModalPreviewUrl] = useState<string>("");
  const [modalPreviewLiveUrl, setModalPreviewLiveUrl] = useState<string>("");
  const [modalPreviewTitle, setModalPreviewTitle] = useState<string>("");
  return (
    <div
      className="text-start text-white py-10 flex flex-col overlay-content"
      id={"projects"}
    >
      {showProjectPreview && (
        <ModalComponent
          onClose={() => setShowProjectPreview(false)}
          headerTitle={modalPreviewTitle}
          liveSiteUrl={previewUrl}
          imageUrl={modalPreviewUrl}
          liveUrl={modalPreviewLiveUrl}
        ></ModalComponent>
      )}
      <h2 className="mb-6 text-body-sm md:text-body">
        My Work
        <div className="border-t border-gray-300 w-1/4"></div>
        <ProjectTile
          setShowProjectPreview={setShowProjectPreview}
          setPreviewUrl={setPreviewUrl}
          title={"retrospective-ui.vercel.app"}
          url={"https://retrospective-ui.vercel.app/"}
          name={
            "Retrospective - A Simplified, Hassle-Free Team Reflection Tool"
          }
          description={[
            "Retrospective was born out of a challenge I faced across multiple teams during sprint retrospectives: the lack of a fast, easy-to-use tool that didn’t require cumbersome sign-ups or fees. Most tools on the market either forced all participants to create accounts or required a paid subscription, which slowed down meetings and discouraged participation—especially for non-developer attendees like supervisors.",
            "This frustration drove me to create Retrospective, a streamlined solution designed to make team reflections smoother and more efficient. The app's MVP1 version is minimalist and functional, allowing users to instantly create or join boards with nothing more than a display name. Its focus is on speed, ease of use, and fostering open communication without unnecessary friction.",
            "As I continue to enhance Retrospective, future iterations will include features like viewer mode for passive participants, the ability to save and revisit boards, and playful touches to personalize team interactions. My ultimate goal is to build a tool that encourages engagement while remaining fast and intuitive—perfect for agile teams who want to get the most out of their retrospectives without the hassle.",
            "By tackling a real pain point I experienced in the workplace, Retrospective reflects my drive to solve practical problems through thoughtful software design.",
          ]}
          additionalInfo={[
            { label: "Front-end", items: ["React", "Next.js", "Tailwind CSS"] },
            { label: "Back-end", items: ["Node.js", "Express", "Websockets"] },
            { label: "Design", items: ["Figma"] },
          ]}
          imgPath={retrospectivePreview.src}
          setModalPreviewUrl={setModalPreviewUrl}
          modalPreviewImgPath={restrospectivePreviewProjectImage.src}
          setModalPreviewTitle={setModalPreviewTitle}
          setModalPreviewLiveUrl={setModalPreviewLiveUrl}
        />
        <ProjectTile
          setShowProjectPreview={setShowProjectPreview}
          setPreviewUrl={setPreviewUrl}
          title={"JsProFinish - utah.com"}
          url={"https://www.jsprofinish-utah.com/"}
          name={"JSProFinish – Basement Finishing Solutions"}
          description={[
            "A professional website for a basement finishing company in Utah, showcasing services, project galleries, and client testimonials. Optimized for SEO and performance to drive local search traffic and generate leads.",
          ]}
          additionalInfo={[
            {
              label: "Front-end",
              items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            },
            {
              label: "Back-end",
              items: ["Node.js"],
            },
            { label: "Design", items: ["Figma"] },
            {
              label: "Hosting/Deployment",
              items: ["Vercel", "GoDaddy (domain)"],
            },
            {
              label: "SEO Optimization",
              items: ["Core Web Vitals", "Lighthouse performance tools"],
            },
          ]}
          imgPath={jsproPreview.src}
          setModalPreviewUrl={setModalPreviewUrl}
          modalPreviewImgPath={jsProPreviewProjectImage.src}
          setModalPreviewTitle={setModalPreviewTitle}
          setModalPreviewLiveUrl={setModalPreviewLiveUrl}
        />
      </h2>
    </div>
  );
};

export default ProjectShowcase;
