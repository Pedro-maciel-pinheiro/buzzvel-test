"use client";

import { linksPath } from "@/constants/nav-links";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LanguageSelector from "../language/language-selector";
import { Squash as Hamburger } from "hamburger-react";
import { useActiveSectionContext } from "@/context/active-section-context";

export const NavigationBar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [navScroll, setNavScroll] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  const animationDelay = 0.4;

  //   {scroll function}
  useEffect(() => {
    const changeWhileScroll = () => {
      if (window.scrollY >= 80) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeWhileScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeWhileScroll);
      }
    };
  }, []);

  return (
    <>
      <nav className="fixed z-20 flex h-14 w-full items-center justify-center text-white backdrop-blur-3xl">
        <div className="hidden md:block">
          <ul
            className={`flex h-10 items-center justify-center rounded-full border-2 text-lg font-medium transition-all duration-1000 ${navScroll ? "gap-8 border-white/70 bg-black px-4" : "gap-4 border-transparent px-2"}`}
          >
            {linksPath.map((link, index) => (
              <motion.li
                key={link.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * animationDelay, duration: 2 }}
                className=""
                onClick={() => setNavIsOpen(false)}
              >
                <Link
                  href={link.href_id}
                  className="relative flex h-10 items-center transition-all duration-500"
                  onClick={() => {
                    setActiveSection(link.title);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.title}
                  {link.title === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 30,
                      }}
                      className="absolute mt-3 flex h-[2px] w-full items-center rounded-full bg-cyan-400"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* {Mobile navbar} */}
        <div
          className={`fixed w-full bg-black md:hidden ${navIsOpen ? "z-50" : "z-30"}`}
        >
          <button onClick={() => setNavIsOpen((prev) => !prev)}>
            <Hamburger />
          </button>

          {navIsOpen && (
            <div className="absolute z-50 h-56 w-full rounded-lg bg-black">
              <ul className="flex flex-col items-start justify-center p-2 text-lg">
                {linksPath.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * animationDelay, duration: 1 }}
                    className="w-full border-b"
                  >
                    <Link
                      href={item.href_id}
                      className="flex h-10 items-center transition-all duration-500 hover:-translate-y-1"
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="absolute right-0 z-30 mx-4">
          <LanguageSelector />
        </div>
      </nav>
    </>
  );
};
