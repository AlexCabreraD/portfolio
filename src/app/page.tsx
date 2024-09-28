"use client";

import { AnimatedBackground } from "@/app/components/animatedBackground";
import Navigation from "@/app/components/navigation";
import Hero from "@/app/components/hero";
import MyTools from "@/app/components/myTools";
import ProjectShowcase from "@/app/components/projectShowcase";
import LoadingScreen from "@/app/components/loadingScreen";
import Contact from "@/app/components/contact";
import ModalComponent from "@/app/components/ModalComponent";

export default function Home() {
  return (
    <div className="text-center h-full">
      <LoadingScreen>
        <div className="m-auto w-full md:max-w-[950px] overlay-content">
          <Navigation />
          <Hero />
          <MyTools />
          <ProjectShowcase />
          <Contact />
        </div>
        <AnimatedBackground />
      </LoadingScreen>
    </div>
  );
}
