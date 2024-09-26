"use client";

import { AnimatedBackground } from "@/app/components/animatedBackground";
import Navigation from "@/app/components/navigation";
import Hero from "@/app/components/hero";
import MyTools from "@/app/components/myTools";
import ProjectShowcase from "@/app/components/projectShowcase";

export default function Home() {
  return (
    <div className="text-center w-screen h-full">
      <div className="m-auto w-full md:max-w-[950px]">
        <Navigation />
        <Hero />
        <MyTools />
        <ProjectShowcase />
      </div>
      <AnimatedBackground />
    </div>
  );
}
