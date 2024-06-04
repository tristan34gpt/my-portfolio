"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiBootstrap,
  SiFigma,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Php",
      Icon: SiPhp,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Github",
      Icon: SiGit,
    },
    {
      text: "Figma",
      Icon: SiFigma,
    },

    {
      text: "Firebase",
      Icon: SiFirebase,
    },
    {
      text: "MongoDb",
      Icon: SiMongodb,
    },
    {
      text: "MySQL",
      Icon: SiMysql,
    },

    {
      text: "Sass",
      Icon: SiSass,
    },

    {
      text: "Bootstrap",
      Icon: SiBootstrap,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text=" Skills 🔧"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
