import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full gap-16">
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src="/logo.png"
          alt="logo"
          width={101}
          height={96}
          className="object-contain hidden sm:block"
          style={{ filter: "invert(100%)" }}
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore Our <span className="red-gradient">Site</span> for Movies & TV Shows
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/anime.png" alt="anime" width={500} height={100} className="object-contain" />
      </div>
    </header>
  );
};

export default Header;
