import { FaLinkedin } from "react-icons/fa";
import { Tooltip } from "@/app/components/tooltip";
import { MdMail } from "react-icons/md";
import { useState } from "react";
import { Snackbar } from "@/app/components/snackbar";
import { IoIosSend } from "react-icons/io";
import TextAreaWithCounter from "@/app/components/textAreaWithCounter";
import emailjs from "emailjs-com";

export default function Contact() {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [snackbarStatus, setSnackbarStatus] = useState<
    "success" | "info" | "warning" | "error" | null
  >(null);

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isMessageError, setIsMessageError] = useState<boolean>(false);

  const [sending, setSending] = useState<boolean>(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSendButtonClick = () => {
    let hasError = false;
    setSending(true);

    if (!message || message.length < 10) {
      setIsMessageError(true);
      setSnackbarStatus("error");
      setSnackbarMessage("Message must be at least 10 characters long.");
      setOpenSnackbar(true);
      hasError = true;
    }

    if (!email) {
      setIsEmailError(true);
      hasError = true;
    } else if (!isValidEmail(email)) {
      setIsEmailError(true);
      setSnackbarStatus("error");
      setSnackbarMessage("Please enter a valid email.");
      setOpenSnackbar(true);
      hasError = true;
    }

    if (hasError) {
      setSnackbarStatus("error");
      setOpenSnackbar(true);
      setSending(false);
      return;
    }

    const templateParams = {
      from_email: email,
      message,
    };

    emailjs
      .send(
        "default_service", // Use environment variable for service ID
        "template_4ykqv9t", // Use environment variable for template ID
        templateParams,
        "rZIVRxJ3jQgbaXXxI", // Use environment variable for user ID,
      )
      .then(() => {
        setSnackbarMessage("Your message has been sent.");
        setSnackbarStatus("success");
        setOpenSnackbar(true);
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setSnackbarStatus("error");
        setSnackbarMessage("There was an error sending your message.");
        setOpenSnackbar(true);
      })
      .finally(() => {
        setSending(false);
      });
  };

  const onCopyEmailClick = () => {
    navigator.clipboard
      .writeText("myEmail")
      .then(() => {
        setSnackbarMessage("Email copied to clipboard!");
        setOpenSnackbar(true);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (isEmailError) {
      setIsEmailError(false); // Reset error state when the user starts typing
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (isMessageError) {
      setIsMessageError(false); // Reset error state when the user starts typing
    }
  };

  return (
    <div className="py-10">
      <Snackbar
        visible={openSnackbar}
        text={snackbarMessage ?? ""}
        status={snackbarStatus}
        onOpen={() => {}}
        onClose={() => {
          setOpenSnackbar(false);
          setSnackbarMessage(null);
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
            <p className={"text-body mt-[8px] md:text-body-lg"}>
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
                  onClick={onCopyEmailClick}
                >
                  <MdMail className="w-10 h-10 sm:w-12 sm:h-12 mr-[16px]" />
                  <p className={"content-center text-body md:text-body-lg"}>
                    myEmail
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
                  href={"https://www.linkedin.com/in/me/"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-10 h-10 sm:w-12 sm:h-12 mr-[16px]" />
                  <p className={"content-center text-body md:text-body-lg"}>
                    my name
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
              value={email}
              onChange={handleEmailChange} // Set email state
              className={`bg-[#181818] h-[32px] rounded-[5px] p-[16px] ${
                isEmailError ? "border border-red-500" : ""
              }`}
              maxLength={254}
            />
            <TextAreaWithCounter
              value={message}
              onChange={handleMessageChange} // Set message state
              className={isMessageError ? "border border-red-500" : ""}
            />
            <button
              className={
                "w-full text-center bg-white text-black rounded-[5px] hover:drop-shadow-glow"
              }
              onClick={onSendButtonClick}
              disabled={sending}
            >
              <div
                className={"flex flex-row items-center justify-center h-[32px]"}
              >
                <IoIosSend className={"mr-[4px]"} />
                {sending ? "Sending..." : "Send"}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
