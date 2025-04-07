import Image from "next/image";
import React from "react";
import ProjectsSection from "@/components/ProjectsSection";
import { Badge } from "@/components/ui/badge";
import AlertDialogWithImage from "@/components/Alerts/AlertDialogWithImage";
import ChartSkill from "@/components/ChartSkill";

const Navbar = () => {
  return (
    <div className="grid h-[1300px] gap-[13px] lg:grid-cols-[1fr_1.618fr_1fr] lg:h-screen lg:gap-[13px] lg:w-screen lg:mx-auto lg:p-[21px]">
      {/* Left Section */}
      <div className="flex flex-col gap-[13px]">
        <div className="rounded-lg flex-grow-[1.618] p-[21px] flex items-center justify-center element">
          <div className="flex flex-col element-child gap-0">
            <span className="font-bold text-[min(8vw,55px)] text-primary leading-tight">
              Hello !
            </span>
            <span className="font-bold text-[min(13vw,89px)] text-primary leading-[0.8]">
              I&apos;m Delvin
            </span>
            <p className="text-secondary pt-[21px] pb-[13px]">
              <span className="font-bold text-primary">
                Fullstack Next.js Programmer
              </span>{" "}
              with certified expertise. Skilled in developing web solutions for
              frontend and backend applications.
            </p>
            <div className="flex flex-row gap-[8px] flex-wrap">
              <Badge
                className="border-white text-primary text-[min(2vw,13px)] bg-badge badge-text"
                variant={"outline"}
              >
                Next.js
              </Badge>
              <Badge
                className="border-white text-primary text-[min(2vw,13px)] bg-badge"
                variant={"outline"}
              >
                React
              </Badge>
              <Badge
                className="border-white text-primary text-[min(2vw,13px)] bg-badge"
                variant={"outline"}
              >
                Tailwind
              </Badge>
              <Badge
                className="border-white text-primary text-[min(2vw,13px)] bg-badge"
                variant={"outline"}
              >
                Python
              </Badge>
              <Badge
                className="border-white text-primary text-[min(2vw,13px)] bg-badge"
                variant={"outline"}
              >
                MongoDB
              </Badge>
              <Badge
                className="border-white text-primary text-[min(2vw,13px)] bg-badge"
                variant={"outline"}
              >
                MySQL
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-[min(3vw,13px)] rounded-lg flex-grow-[1] items-center justify-center element2 md:p-[min(2vw,10px)] lg:p-[min(2vw,21px)]">
          <span className="text-primary text-[min(3vw,16px)] w-full text-center mb-[min(3vw,13px)] md:mb-[min(2vw,10px)] lg:text-[min(2vw,20px)] lg:mb-[min(2vw,13px)]">
            Certificate From:
          </span>
          <div className="flex flex-row gap-[min(2vw,13px)] justify-center items-center flex-wrap md:gap-[min(1.5vw,10px)] lg:gap-[min(2vw,13px)]">
            {/* Google Logo */}
            <div className="w-[min(15vw,70px)] h-[min(15vw,70px)] flex items-center justify-center aspect-square md:w-[min(12vw,60px)] md:h-[min(12vw,60px)] lg:w-[min(15vw,70px)] lg:h-[min(15vw,70px)]">
              <Image
                src="/google.png"
                alt="Google Logo"
                width={70}
                height={70}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            {/* IBM Logo */}
            <div className="w-[min(15vw,70px)] h-[min(15vw,70px)] flex items-center justify-center aspect-square md:w-[min(12vw,60px)] md:h-[min(12vw,60px)] lg:w-[min(15vw,70px)] lg:h-[min(15vw,70px)]">
              <Image
                src="/IBM_logo.png"
                alt="IBM Logo"
                width={70}
                height={70}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            {/* JSM Logo */}
            <div className="w-[min(15vw,65px)] h-[min(15vw,65px)] flex items-center justify-center aspect-square md:w-[min(12vw,55px)] md:h-[min(12vw,55px)] lg:w-[min(15vw,65px)] lg:h-[min(15vw,65px)]">
              <Image
                src="/jsm-color.png"
                alt="JSM Logo"
                width={65}
                height={65}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            {/* Coursera Logo */}
            <div className="w-[min(20vw,100px)] h-[min(20vw,100px)] flex items-center justify-center aspect-square md:w-[min(15vw,80px)] md:h-[min(15vw,80px)] lg:w-[min(20vw,100px)] lg:h-[min(20vw,100px)]">
              <Image
                src="/coursera-logo.png"
                alt="Coursera Logo"
                width={100}
                height={100}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="mt-[min(3vw,13px)] md:mt-[min(2vw,10px)] lg:mt-[min(2vw,13px)]">
            <AlertDialogWithImage />
          </div>
        </div>
      </div>

      {/* Middle Section - Split into Two Divs */}
      <div className="flex flex-col gap-[13px]">
        {/* Top Part - Next.js Expertise */}
        <div className="rounded-lg flex-grow-[1.618] p-[21px] flex items-center justify-center">
          <div className="flex flex-col items-center p-6 bg-black-950 text-white border-2 border-white rounded-2xl shadow-[0_0_15px_#ffffff] w-full element-child3 bg-black/40 inset-0 backdrop-blur-sm py-4">
            {/* Container untuk Next.js Logo */}
            <div className="w-[90px] h-[90px] flex items-center justify-center border-2 border-white bg-white rounded-full p-[13px] mb-4">
              <Image
                src="/nextjs-icon.png"
                alt="Next.js Logo"
                width={90}
                height={90}
                className="object-contain w-full h-full element-child4"
                priority
              />
            </div>
            <h2 className="text-xl font-bold mb-2 bg-black border-2 border-white rounded-2xl px-4">
              Next.js Expertise
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-sm ">
              <li>
                <strong>Scalable Architecture:</strong> Designed clean, modular,
                and easily extensible folder structures (e.g., dedicated `api`
                and `action` folders for backend logic), promoting reusability
                and scalability.
              </li>
              <li>
                <strong>Efficient Codebase:</strong> Leveraged reusable
                functions to eliminate redundancy, ensuring DRY principles for
                streamlined development.
              </li>
              <li>
                <strong>Performance Optimization:</strong> Enhanced web speed
                using `use server` and `use client` directives for efficient
                rendering.
              </li>
              <li>
                <strong>Robust Routing:</strong> Implemented separate, typo-free
                routing systems to simplify navigation management.
              </li>
              <li>
                <strong>Secure Authentication:</strong> Integrated seamless
                social authentication (e.g., GitHub, Google) for secure login
                experiences.
              </li>
              <li>
                <strong>Dynamic Filtering:</strong> Built responsive filtering
                systems combining frontend and backend logic.
              </li>
              <li>
                <strong>Custom Error Handling:</strong> Developed a bespoke
                error-handling library for consistent, maintainable code.
              </li>
              <li>
                <strong>AI-Powered Features:</strong> Incorporated AI
                integrations to deliver intelligent, cutting-edge solutions.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Part - Updated Additional Information */}
        <div className="rounded-lg flex-grow-[1] p-[21px] flex items-center justify-center">
          <div className="flex flex-col items-center p-6 bg-black-950 text-white border-2 border-white rounded-2xl shadow-[0_0_15px_#ffffff] w-full element-child5 bg-black/40 inset-0 backdrop-blur-sm  py-4">
            <h2 className="text-xl font-bold mb-2">Additional Information</h2>
            <p className="text-sm text-gray-300 text-center">
              I am actively seeking remote work opportunities to gain valuable
              experience in a remote environment while continuously enhancing my
              skills and professional growth.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-[13px]">
        {/* Skill Proficiency Overview - Hidden on Tablet */}
        <div className="rounded-lg flex-grow-[1] p-[21px] flex items-center justify-center element4 w-full h-full md:block lg:block">
          <div className="element-child4 w-full h-full">
            <ChartSkill />
          </div>
        </div>
        <div className="rounded-lg flex-grow-[1.618] p-[21px] flex items-center justify-center element5 w-full h-full">
          <div className="element-child5 w-full h-full">
            <ProjectsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
