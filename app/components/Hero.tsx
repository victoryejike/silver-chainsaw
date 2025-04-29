import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="text-center pt-7 lg:pt-[150px] pb-14">
      <h1 className="font-bold text-[32px] pb-4 lg:pt-0 lg:text-[56px] text-[#222222] max-w-2xl mx-auto">
        SOM Integrated Company
      </h1>
      <p className="text-base lg:text-lg text-[#595E63] max-w-3xl mx-auto">
        We specialize in the supply of security and safety equipment, security
        training and design, project management, procurement of IT equipment,
        and general merchandise.{" "}
      </p>
      <button className="bg-primary text-white rounded-lg text-base py-3 px-4 cursor-pointer mt-6 w-full lg:w-auto">
        <Link href="#contact">Book a call</Link>
      </button>
      {/* Images */}
      <div className="flex justify-center items-center bg-white py-10">
        <div className="flex overflow-hidden">
          <Image
            src="/hero.png"
            alt="hero"
            height={395}
            width={1296}
            className="hidden lg:block"
          />
          <Image
            src="/hero-mobile.png"
            alt="hero"
            height={395}
            width={1296}
            className="block lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
