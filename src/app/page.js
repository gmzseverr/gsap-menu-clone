"use client";
import React from "react";
import { gsap } from "gsap";

import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Home() {
  return <div className="text-5xl flex-center text-pink-500"></div>;
}

export default Home;
