import { useTranslations } from "next-intl";
import { SpinAnimation } from "@/components/spin-animation/spin-animation";
import { motion } from "framer-motion";
import { fadeIn, slideInFromBottom, slideInFromLeft } from "@/utils/motion";
import { useSectionInView } from "@/hooks/hooks";




export const LandingPage = () => {
  const { ref } = useSectionInView("Home");
  const t = useTranslations("home");
  return (
    <section
      ref={ref}
      id="home"
      className="flex min-h-screen w-full items-center justify-center md:max-w-full"
    >
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={fadeIn(0.2)}
        className="grid h-auto w-full max-w-[90%] content-center rounded-lg md:h-[700px] md:max-w-7xl md:grid-cols-2"
      >
        {/* {hero} */}
        <motion.div
          variants={fadeIn(0.8)}
          className="relative flex h-[400px] items-center justify-center overflow-hidden"
        >
          <SpinAnimation />

          {/* <Image src={"/img/avatar.jpg"} alt="Hero section Image" width={400} height={400}
          className="rounded-full"/> */}
        </motion.div>

        <div className="flex h-auto w-full flex-col items-start justify-center gap-2 overflow-hidden font-semibold text-white">
          <motion.h1
            variants={slideInFromLeft(0.2)}
            className="text-6xl transition-colors duration-500 hover:text-cyan-400"
          >
            {t("title-h1")}
          </motion.h1>
          <motion.h2
            variants={slideInFromLeft(0.8)}
            className="text-4xl transition-colors duration-500 hover:text-cyan-400"
          >
            {t("text-h2")}
          </motion.h2>
          <motion.h3
            variants={slideInFromLeft(1.0)}
            className="text-4xl transition-colors duration-500 hover:text-cyan-400"
          >
            {t("text-h3")}
          </motion.h3>

          <motion.p
            variants={slideInFromBottom(1.2)}
            className="text-3xl text-gray-400"
          >
            {t("text-p")}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
