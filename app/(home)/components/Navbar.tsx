import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/onboarding/start/profile-location/new/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/tristan34gpt",
      label: "Github",
      Icon: SiGithub,
    },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Tristan Vera 🙋‍♂️
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((socials, index) => {
          const Icon = socials.Icon;
          return (
            <Link href={socials.link} key={index} aria-label={socials.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
