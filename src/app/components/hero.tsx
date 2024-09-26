import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Snackbar } from "@/app/components/snackbar";
import { useState } from "react";
import { Tooltip } from "@/app/components/tooltip";

export default function Hero() {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText("AlexCabreraD22@gmail.com")
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className={"text-center"}>
      <Snackbar
        visible={openSnackbar}
        text={"Email copied to clipboard!"}
        onOpen={() => copyEmailToClipboard()}
        onClose={() => {
          setOpenSnackbar(false);
        }}
      />
      <p
        className={
          "text-h1-sm md:text-h1 lg:text-h1-lg mt-[128px] drop-shadow-glow"
        }
      >
        Alejandro Cabrera
      </p>
      <TypeAnimation
        sequence={[
          "Front-end", // Types 'One'
          1000, // Waits 1s
          "Back-end", // Deletes 'One' and types 'Two'
          1000, // Waits 2s
          "Full Stack Web Developer", // Types 'Three' without deleting 'Two'
        ]}
        wrapper="span"
        cursor={true}
        className={
          "text-h2-sm md:text-h2 lg:text-h2-lg text-[#999797] mt-[8px]"
        }
      />
      <p
        className={
          "text-body-sm md:text-body lg:text-body-lg text-[#565555] mt-[16px]"
        }
      >
        I build the bridges between design and functionality. With skills in
        both front-end and back-end development, I turn ideas into real
        applications. I love tackling challenges and finding creative solutions
        that make things work better. When I’m not coding, I’m fishing or
        enjoying a good book.
      </p>
      <div className="flex items-center justify-center mt-[32px]">
        <div className="flex-grow border-t border-gray-300 mr-2"></div>
        <div className="flex items-center">
          <a
            className={"mx-10 hover:cursor-pointer"}
            href={"https://www.linkedin.com/in/cabrera-alejandro/"}
            target={"_blank"}
          >
            <Tooltip text={"Let's connect!"} position={"bottom"}>
              <FaLinkedin className="w-10 h-10 sm:w-12 sm:h-12 hover:drop-shadow-glow" />
            </Tooltip>
          </a>
          <a
            className={"mx-10 hover:cursor-pointer"}
            onClick={() => {
              setOpenSnackbar(true);
            }}
          >
            <Tooltip text={"Click to copy my email"} position={"bottom"}>
              <MdMail className="w-10 h-10 sm:w-12 sm:h-12 hover:drop-shadow-glow" />
            </Tooltip>
          </a>
          <a
            className={"mx-10 hover:cursor-pointer"}
            href="https://github.com/AlexCabreraD"
            target={"_blank"}
          >
            <Tooltip text={"See what I'm up to!"} position={"bottom"}>
              <FaGithub className="w-10 h-10 sm:w-12 sm:h-12 hover:drop-shadow-glow" />
            </Tooltip>
          </a>
        </div>
        <div className="flex-grow border-t border-gray-300 ml-2"></div>
      </div>
    </div>
  );
}
