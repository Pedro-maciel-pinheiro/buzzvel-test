"use client";

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

function LanguageSelector() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const handleLanguageChange = (locale: string) => {
    setIsDropDownOpen(false);
    const newPath = `/${locale}${pathname.slice(3)}`;
    router.push(newPath);
  };

  return (
    <div className="relative w-10">
      <button
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        className="flex items-center justify-center text-[16px] font-bold"
      >
        {currentLocale.toUpperCase()}
        <span>
          <FaChevronDown
            className="transition-all duration-500"
            size={12}
            style={{
              transform: isDropDownOpen ? "scaleY(-1)" : "scaleY(1)",
            }}
          />
        </span>
      </button>

      {isDropDownOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn(0.2)}
          className="absolute right-0 z-30 mt-3 rounded-lg bg-white shadow-lg"
        >
          <ul className="flex flex-col rounded-lg text-[16px] text-black">
            <li
              onClick={() => handleLanguageChange("en")}
              className={`cursor-pointer rounded-lg px-4 py-2 font-bold hover:bg-slate-200 ${currentLocale === "en" ? "text-cyan-500" : ""}`}
            >
              EN
            </li>
            <li
              onClick={() => handleLanguageChange("pt")}
              className={`cursor-pointer rounded-lg px-4 py-2 font-bold hover:bg-slate-200 ${currentLocale === "pt" ? "text-cyan-500" : ""}`}
            >
              PT
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default LanguageSelector;
