"use client";

import { AnimatedBackground } from "@/app/components/animatedBackground";
import Navigation from "@/app/components/navigation";
import Hero from "@/app/components/hero";
import MyTools from "@/app/components/myTools";
import ProjectShowcase from "@/app/components/projectShowcase";
// import { useEffect, useState } from "react";
import LoadingScreen from "@/app/components/loadingScreen";

export default function Home() {
  return (
    <div className="text-center h-full">
      <LoadingScreen>
        <div className="m-auto w-full md:max-w-[950px]">
          <Navigation />
          <Hero />
          <MyTools />
          <ProjectShowcase />
        </div>
        <AnimatedBackground />
      </LoadingScreen>
    </div>
  );
}
