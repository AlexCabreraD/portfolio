import React, { useEffect, useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import Image from "next/image";

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
  liveSiteUrl?: string;
  headerTitle: string;
  liveUrl: string;
}

const ModalComponent: React.FC<ModalProps> = ({
  imageUrl,
  onClose,
  liveSiteUrl,
  headerTitle,
  liveUrl,
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

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
              href={liveUrl}
              target={"_blank"}
              rel="noopener noreferrer"
              className="hover:drop-shadow-glow"
            >
              {headerTitle}
            </a>
          </div>
        </div>

        <div className="h-[70vh] md:h-[90vh] overflow-auto flex justify-center">
          <div className="justify-center w-full">
            {isImageLoading && (
              <div className="flex items-center justify-center w-full h-full bg-black rounded animate-pulse">
                <svg
                  className="w-10 h-10 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            )}
            <Image
              src={imageUrl}
              alt="Website Screenshot"
              className={`w-full h-auto object-cover ${
                isImageLoading ? "hidden" : "block"
              }`}
              width={1440}
              height={1080}
              onLoadingComplete={() => setIsImageLoading(false)}
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
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
