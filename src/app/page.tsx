import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "#" },
  {
    name: "My CV",
    href: "https://docs.google.com/document/d/1VUrjD2ERLOw_gOe4Jf7Eq078G_JuHNnZFpic6M6w3IY/edit?usp=sharing",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex flex-wrap items-center justify-center gap-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="animate-fade-in mb-16">
        <img
          className="w-16 md:w-32 lg:w-48 saturate-0 hover:saturate-100 duration-500 rounded-full"
          src="/images/profile.jpg"
          alt="Sepehr's Profile Picture"
        />
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-2xl text-transparent duration-500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text">
        Sepehr Sohrabi
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="animate-fade-in">
        <h2 className="text-sm md:text-2xl">Full-Stack Developer</h2>
      </div>
      <div className="my-16 flex items-center justify-around animate-fade-in gap-5">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/sepehrsohrabi/"
          className="group text-black p-1 bg-white saturate-0 hover:saturate-100 duration-500 rounded-lg flex items-center justify-center gap-2"
        >
          <img
            className="w-2 md:w-4 lg:w-8"
            src="/images/linkedin-icon.jpg"
            alt="Linkedin Address"
          />
          <p className="hidden group-hover:block duration-500">
            /sepehrsohrabi
          </p>
        </Link>
        <Link
          target="_blank"
          href="https://github.com/sepehrsohrabii"
          className="group text-black p-1 bg-white saturate-0 hover:saturate-100 duration-500 rounded-lg flex items-center justify-center gap-2"
        >
          <img
            className="w-2 md:w-4 lg:w-8"
            src="/images/github-icon.jpg"
            alt="Github Address"
          />
          <p className="hidden group-hover:block duration-500">
            /sepehrsohrabii
          </p>
        </Link>
        <Link
          target="_blank"
          href="mailto:sepehr0sohrabi@gmail.com"
          className="group text-black p-1 bg-white saturate-0 hover:saturate-100 duration-500 rounded-lg flex items-center justify-center gap-2"
        >
          <img
            className="w-2 md:w-4 lg:w-8"
            src="/images/gmail-icon.png"
            alt="Gmail Address"
          />
          <p className="hidden group-hover:block duration-500">
            sepehr0sohrabi@gmail.com
          </p>
        </Link>
        <Link
          target="_blank"
          href="tel:+989114555951"
          className="group text-black p-1 bg-white saturate-0 hover:saturate-100 duration-500 rounded-lg flex items-center justify-center gap-2"
        >
          <img
            className="w-2 md:w-4 lg:w-8"
            src="/images/phone-icon.png"
            alt="Mobile Number"
          />
          <p className="hidden group-hover:block duration-500">
            +98 911 455 5951
          </p>
        </Link>
        <Link
          target="_blank"
          href="https://t.me/SepehrSohrabii"
          className="group text-black p-1 bg-white saturate-0 hover:saturate-100 duration-500 rounded-lg flex items-center justify-center gap-2"
        >
          <img
            className="w-2 md:w-4 lg:w-8"
            src="/images/telegram-icon.jpg"
            alt="Mobile Number"
          />
          <p className="hidden group-hover:block duration-500">
            @SepehrSohrabii
          </p>
        </Link>
      </div>
    </div>
  );
}
