import React from "react";
import Logo from "../../public/assets/logo.webp";
import Image from "next/image";
import { Menu } from ".";

function Navbar() {
  return (
    <div className="h-16 md:h-32 bg-bg-50 text-sm p-4 md:pl-10 text-primary-500 flex items-center justify-between font-bold ">
      <div className="flex items-center gap-2 ">
        <Image src={Logo} width={20} height={20} alt="logo" />
        <p>afterschool</p>
      </div>
      <p className="underline bg-gradient-to-r from-purple-900 via-purple-600 to-purple-500 bg-clip-text text-transparent">
        Login / Start your journey
      </p>
      <Menu />
    </div>
  );
}

export default Navbar;
