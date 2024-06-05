import React from "react";
import {
  SiFigma,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNotion,
  SiReactquery,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Tranquille",
      tech: [
        SiReactquery,
        SiJavascript,
        SiFirebase,
        SiTailwindcss,
        SiFigma,
        SiNotion,
      ],

      link: "https://tranquille-project.netlify.app/",
      cover: "/tranquille.png",
      background: "bg-indigo-500",
    },
    {
      title: "Threads",
      tech: [
        SiReactquery,
        SiJavascript,
        SiNextdotjs,
        SiMongodb,
        SiTailwindcss,
        SiNotion,
      ],
      link: "https://threadstest.netlify.app/",
      cover: "/threads.png",
      background: "bg-green-500",
    },
    {
      title: "Pokédex",
      tech: [SiReactquery, SiJavascript, , SiFirebase, SiTailwindcss, SiNotion],
      link: "https://pokepokedex-project.netlify.app/",

      cover: "/pokedex.png",
      background: "bg-green-500",
    },
    {
      title: "Portfolio",
      tech: [SiReactquery, SiJavascript, SiNextdotjs, SiTailwindcss, SiNotion],
      link: "https://tristan-vera.netlify.app/",
      cover: "/portfolio.png",

      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text=" Projects 📫"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link target="blank" href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold ">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map(
                        (Icon, index) =>
                          Icon && <Icon key={index} className="w-8 h-8" />
                      )}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
