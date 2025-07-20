"use client";
import React from "react";
import { navLinks } from "..";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <nav className="fixed z-50 w-full bg-black">
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        <a href="/" className="flex items-center gap-2 text-nowrap text-white">
          <img src="/images/logo.png" alt="logo" className="h-8 w-auto" />
          <p className="font-road text-3xl">Velvet Pour</p>
        </a>

        <ul className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-7 text-sm sm:text-base text-white">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:underline">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
