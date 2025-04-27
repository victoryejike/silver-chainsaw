import React from "react";
import Hero from "./Hero";
import Service from "./Service";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className="mt-4 bg-white rounded-[28px]">
      <Hero />
      <Service />
      <Contact />
    </div>
  );
};

export default Main;
