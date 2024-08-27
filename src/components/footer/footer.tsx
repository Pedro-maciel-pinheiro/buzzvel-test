import React from "react";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary flex h-56 w-full flex-col items-center
     justify-center rounded border-t-2 border-[#00f0f8] p-10 backdrop-blur-lg md:mt-20">
      <nav>
        <div className="mb-10 grid grid-flow-col gap-4 text-white">
          <Link
            href={"https://www.linkedin.com/in/jpmp1998/"}
            target="blank"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={40} />
          </Link>
          <Link
            href={"https://github.com/Pedro-maciel-pinheiro"}
            target="blank"
            className="hover:text-purple-600"
          >
            <FaGithub size={40} />
          </Link>
          <Link
            href={"https://web.whatsapp.com/send?phone=5561998516239"}
            target="blank"
            className="hover:text-green-600"
          >
            <FaWhatsappSquare size={40} />
          </Link>
        </div>
      </nav>
      <aside className="flex flex-col items-center  text-sm md:text-lg font-bold text-black dark:text-white">
        <span>João Pedro Maciel Pinheiro</span>
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 hover:bg-gradient-to-l">
          {" "}
          Front-end Devoloper & Web designer
        </span>
        <span className="flex items-center justify-center gap-2 mt-2">
          <Image
            src={"/img/buzzvel.svg"}
            alt="buzzvel logo icon"
            width={80}
            height={80}
          />{" "}
          <p className="mt-1 font-medium">Front-end Test</p>
        </span>
      </aside>
    </footer>
  );
}

export default Footer;
