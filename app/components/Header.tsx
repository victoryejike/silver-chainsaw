// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="rounded-[28px] flex justify-between items-center bg-white p-6">
      <div>
        <Image src="/logo.svg" alt="logo" height={28} width={102} />
      </div>
      <button className="bg-primary text-white rounded-lg text-base py-3 px-4 cursor-pointer">
        <Link href="#contact">Book a call</Link>
      </button>
    </div>
  );
};

export default Header;
