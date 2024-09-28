import { FaLinkedin } from "react-icons/fa";
import { Tooltip } from "@/app/components/tooltip";
import { MdMail } from "react-icons/md";
import { useState } from "react";
import { Snackbar } from "@/app/components/snackbar";
import { IoIosSend } from "react-icons/io";
import TextAreaWithCounter from "@/app/components/textAreaWithCounter";

export default function Contact() {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText("AlexCabreraD22@gmail.com")
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="py-10">
      <Snackbar
        visible={openSnackbar}
        text={"Email copied to clipboard!"}
        onOpen={() => copyEmailToClipboard()}
        onClose={() => {
          setOpenSnackbar(false);
        }}
      />
      <div className="container mx-auto text-start">
        <h2 className="mb-6 text-body-sm md:text-body">
          Contact Me
          <div className="border-t border-gray-300 w-1/4"></div>
        </h2>
        <p className={"text-h3 mt-[32px] md:text-h3-lg drop-shadow-glow"}>
          {"Let's work together"}
        </p>
        <div className={"flex flex-col md:flex-row md:space-x-[64px]"}>
          <div className={"flex flex-col flex-1"}>
            <p className={"text-body mt-[16px] md:text-body-lg"}>
              {
                "I'm always open to discussing new opportunities, projects, or collaborations."
              }
            </p>
            <p className={"mt-[8px]"}>
              {
                "Whether you want to chat about full stack development, your next big idea, or simply need advice on a tech challenge, feel free to reach out!"
              }
            </p>
            <div className={"mt-[16px]"}>
              <Tooltip text={"Click to copy my email"} position={"end"}>
                <a
                  className={
                    "hover:cursor-pointer flex flex-row w-fit hover:drop-shadow-glow"
                  }
                  onClick={() => {
                    setOpenSnackbar(true);
                  }}
                >
                  <MdMail className="w-10 h-10 sm:w-12 sm:h-12 mr-[16px]" />

                  <p className={"content-center text-body md:text-body-lg"}>
                    AlexCabreraD22@gmail.com
                  </p>
                </a>
              </Tooltip>
            </div>
            <div className={"mt-[16px]"}>
              <Tooltip text={"Let's Connect!"} position={"end"}>
                <a
                  className={
                    "hover:cursor-pointer flex flex-row w-fit hover:drop-shadow-glow"
                  }
                  onClick={() => {
                    setOpenSnackbar(true);
                  }}
                >
                  <FaLinkedin className="w-10 h-10 sm:w-12 sm:h-12 mr-[16px]" />
                  <p className={"content-center text-body md:text-body-lg"}>
                    Cabrera-Alejandro
                  </p>
                </a>
              </Tooltip>
            </div>
          </div>
          {/*  form section */}
          <div
            className={
              "flex-1 flex flex-col justify-end space-y-[16px] mt-[32px] md:mt-[0px]"
            }
          >
            <input
              placeholder={"Email*"}
              type={"email"}
              required
              className={"bg-[#181818] h-[32px] rounded-[5px] p-[16px]"}
            />
            <TextAreaWithCounter />
            <button
              className={
                "w-full text-center bg-white text-black rounded-[5px] hover:drop-shadow-glow"
              }
            >
              <div
                className={"flex flex-row items-center justify-center h-[32px]"}
              >
                <IoIosSend className={"mr-[4px]"} />
                Send
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
