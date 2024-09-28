"use client";

import { AnimatedBackground } from "@/app/components/animatedBackground";
import Navigation from "@/app/components/navigation";
import Hero from "@/app/components/hero";
import MyTools from "@/app/components/myTools";
import ProjectShowcase from "@/app/components/projectShowcase";
import LoadingScreen from "@/app/components/loadingScreen";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="text-center h-full">
      <LoadingScreen>
        <div className="m-auto w-full md:max-w-[950px] overlay-content">
          <Navigation />
          <Hero />
          <MyTools />
          <ProjectShowcase />
          <Contact />
          <Footer />
        </div>
        <AnimatedBackground />
      </LoadingScreen>
    </div>
  );
}
