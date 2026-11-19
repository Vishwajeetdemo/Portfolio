import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { roles } from "@/lib/data";
import { profileImg } from "@/public/assets";
import SocialLinks from "./SocialLinks";

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "15+", label: "Projects delivered" },
  { value: "GenAI", label: "LLM · RAG · Agents" },
];

const fade = (delay: number) => ({
  initial: { y: 16, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, delay },
});

const Banner = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2500
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden section-y !pt-16 md:!pt-24 bg-grid">
      {/* soft decorative glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-highlight/15 blur-3xl"></div>

      <div className="container-x relative grid lgl:grid-cols-[1.15fr_0.85fr] items-center gap-14 lgl:gap-10">
        {/* Text */}
        <div className="flex flex-col items-center lgl:items-start text-center lgl:text-left order-2 lgl:order-1">
          <motion.p
            {...fade(0.1)}
            className="font-titleFont text-accent text-sm md:text-base font-semibold tracking-widest uppercase"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            {...fade(0.2)}
            className="font-titleFont font-bold text-4xl md:text-5xl xl:text-6xl mt-3 text-textLight"
          >
            <span className="bg-gradient-to-r from-accent to-violet-500 bg-clip-text text-transparent">
              Vishwajeet Kumar
            </span>
          </motion.h1>
          <motion.h2
            {...fade(0.3)}
            className="font-titleFont font-semibold text-xl md:text-3xl mt-3 text-textDark min-h-[2.5rem] md:min-h-[2.75rem]"
          >
            I build{" "}
            <motion.span
              key={roleIndex}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-accent inline-block"
            >
              {roles[roleIndex]}
            </motion.span>
          </motion.h2>
          <motion.p
            {...fade(0.4)}
            className="mt-6 max-w-xl text-base md:text-lg text-textDark leading-relaxed"
          >
            Full-stack developer crafting fast, reliable products with React,
            Next.js and Node.js. At Royal Cyber I also design{" "}
            <span className="text-accent font-medium">
              Generative AI, LLM, RAG and Agentic AI
            </span>{" "}
            solutions for real business applications.
          </motion.p>
          <motion.div
            {...fade(0.5)}
            className="mt-8 flex flex-wrap justify-center lgl:justify-start gap-4"
          >
            <a href="#project" className="btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn-outline">
              Contact me
            </a>
          </motion.div>
          <motion.div {...fade(0.6)} className="mt-8">
            <SocialLinks className="flex gap-3" />
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="order-1 lgl:order-2 flex justify-center lgl:justify-end"
        >
          <div className="relative w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-accent/70 bg-gradient-to-br from-accent/10 to-highlight/20"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-surface shadow-xl shadow-accent/20">
              <Image
                src={profileImg}
                alt="Vishwajeet Kumar"
                fill
                priority
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.ul
          {...fade(0.7)}
          className="order-3 lgl:col-span-2 grid grid-cols-3 gap-3 md:gap-6 max-w-3xl w-full mx-auto"
        >
          {stats.map((s) => (
            <li
              key={s.label}
              className="rounded-xl bg-surface border border-accent/15 hover:border-accent/50 duration-300 py-4 px-3 md:py-6 text-center"
            >
              <p className="text-2xl md:text-3xl font-titleFont font-bold text-accent">
                {s.value}
              </p>
              <p className="text-[11px] md:text-sm text-textDark mt-1">
                {s.label}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Banner;
