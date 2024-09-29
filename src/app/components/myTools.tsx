import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiServer } from "react-icons/ci";
import { GrMysql } from "react-icons/gr";
import { PiPaintBrush } from "react-icons/pi";
import {
  SiNextdotjs,
  SiTypescript,
  SiKotlin,
  SiSpringboot,
} from "react-icons/si";

const MyTools = () => {
  return (
    <div className="py-10" id={"tools"}>
      <div className="container mx-auto text-start">
        <h2 className="mb-6 text-body-sm md:text-body">
          My Tools
          <div className="border-t border-gray-300 w-1/4"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5">
          {/* Front-end Section */}
          <div className="order-1 lg:order-1">
            <div className="mb-6 text-start">
              <div className="flex flex-row space-x-2">
                <HiOutlineDesktopComputer size={25} />
                <h3 className="font-semibold mb-4 text-start text-body-sm md:text-body">
                  Front-end
                </h3>
              </div>
              <div className="flex flex-row justify-start space-x-8 ml-[32px]">
                <div className="flex items-center space-x-2">
                  <SiTypescript size={25} />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiNextdotjs size={25} />
                  <span>Next.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaReact size={25} />

                  <span>React</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back-end Section */}
          <div className="order-2 lg:order-2">
            <div className="mb-6">
              <div className="flex flex-row lg:place-content-end space-x-2">
                <CiServer size={25} />
                <h3 className="font-semibold mb-4 text-body-sm md:text-body">
                  Back-end
                </h3>
              </div>
              <div className="flex flex-row space-x-8 ml-[32px] lg:justify-end lg:mr-[32px]">
                <div className="flex items-center space-x-2">
                  <FaNodeJs size={25} />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiKotlin size={25} />
                  <span>Kotlin</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiSpringboot size={25} />
                  <span>Springboot</span>
                </div>
              </div>
            </div>
          </div>

          {/* Database Section */}
          <div className="order-3 lg:order-3">
            <div>
              <div className="flex flex-row space-x-2 lg:mt-[32px]">
                <GoDatabase size={25} />
                <h3 className="font-semibold mb-4 text-start text-body-sm md:text-body">
                  Database
                </h3>
              </div>
              <div className="flex items-center space-x-2 ml-[32px]">
                <GrMysql size={25} />
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* Design Section */}
          <div className="order-4 lg:order-4">
            <div className="flex flex-row space-x-2 lg:mt-[32px] lg:place-content-end">
              <PiPaintBrush size={25} />
              <h3 className="font-semibold mb-4 text-body-sm md:text-body">
                Design
              </h3>
            </div>
            <div className="flex flex-row lg:justify-end">
              <div className="flex items-center space-x-2 ml-[32px] lg:mr-[32px]">
                <FaFigma size={25} />
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTools;
