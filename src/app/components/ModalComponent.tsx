import React, { useEffect } from "react";
import { BsCircleFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import Image from "next/image";

interface ModalProps {
  imageUrl: string; // URL or file path of the full screenshot
  onClose: () => void; // Function to close the modal
  liveSiteUrl?: string; // URL to open the live site
  headerTitle: string;
}

const ModalComponent: React.FC<ModalProps> = ({
  imageUrl,
  onClose,
  liveSiteUrl,
  headerTitle,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#181818] w-full max-w-5xl rounded-xl shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#181818] flex items-center px-4 py-2 sticky top-0">
          <div className="flex space-x-2">
            <button className={"z-10"} onClick={onClose}>
              <BsCircleFill className="text-red-500" size={10} />
            </button>

            <BsCircleFill className="text-yellow-500" size={10} />
            <a
              href={liveSiteUrl}
              target={"_blank"}
              className={"drop-shadow-glow cursor-pointer"}
              rel="noopener noreferrer"
            >
              <BsCircleFill className="text-green-500" size={10} />
            </a>
          </div>
          <div className="flex flex-1 w-full items-center justify-center ml-[-66px]">
            <FaLock className="mr-3" />
            <a
              href={"https://www.jsprofinish-utah.com/"}
              target={"_blank"}
              rel="noopener noreferrer"
              className="hover:drop-shadow-glow"
            >
              {headerTitle}
            </a>
          </div>
        </div>

        <div className="h-[70vh] md:h-[90vh] overflow-auto">
          <div className="flex justify-center w-full">
            <Image
              src={imageUrl}
              alt="Website Screenshot"
              className="w-full h-auto object-cover"
              width={1440}
              height={1080}
              priority
            />
          </div>
        </div>
        <button
          className={"bg-[#181818] py-[8px] w-full lg:hidden"}
          onClick={() => {
            onClose();
          }}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
