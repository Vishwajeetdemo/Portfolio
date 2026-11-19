import { useCallback, useEffect, useState } from "react";
import { amazonImg, cyberImg, noorShop, virtualEdu } from "@/public/assets";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

interface Project {
  title: string;
  image: StaticImageData;
  description: React.ReactNode;
  tech: string[];
  github: string;
  live: string;
}

const hl = (text: string) => <span className="text-accent">{text}</span>;

const projects: Project[] = [
  {
    title: "Amazon Clone 2.0",
    image: amazonImg,
    description: (
      <>
        A full e-commerce experience inspired by Amazon: browse products, sign
        in with {hl("OAuth")} and pay securely through {hl("Stripe")}.
      </>
    ),
    tech: ["React.js", "JavaScript", "CSS", "MUI", "Netlify"],
    github: profile.github,
    live: "https://ecommersvishwajeet.netlify.app/",
  },
  {
    title: "Showroom Saree Website",
    image: cyberImg,
    description: (
      <>
        {hl("Showroom Saree")} is a responsive e-commerce web app for selling
        traditional sarees online, built with {hl("React")} and{" "}
        {hl("Tailwind CSS")}. It has an interactive product gallery, category
        filters, a cart and a wishlist, with a focus on{" "}
        {hl("performance, mobile-friendliness and clean design")}.
      </>
    ),
    tech: ["Node.js", "React.js", "JWT Auth", "Redux", "React Hook Form"],
    github: profile.github,
    live: "https://showroomisaree.netlify.app/",
  },
  {
    title: "School Nexus",
    image: noorShop,
    description: (
      <>
        {hl("School Nexus")} is an academic management platform that helps
        admins and teachers manage class-wise student data, record marks and
        track progress. Built with {hl("React")}, {hl("Node.js")},{" "}
        {hl("JWT authentication")} and MongoDB.
      </>
    ),
    tech: ["Node.js", "React.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    github: "https://github.com/Vishwajeetdemo/blackegel",
    live: "https://school-nexus.netlify.app/",
  },
  {
    title: "Virtual Edu Platform",
    image: virtualEdu,
    description: (
      <>
        {hl("Virtual Edu")} is a responsive learning platform for exploring
        courses, reading blogs and engaging with academic content, built with{" "}
        {hl("React")} and {hl("Tailwind CSS")}. Its structure is ready for{" "}
        {hl("authentication, admin content management and video streaming")}.
      </>
    ),
    tech: ["React.js", "Tailwind CSS", "React Router", "Responsive", "Netlify"],
    github: profile.github,
    live: "https://virtual-edu.netlify.app/",
  },
];

const AUTOPLAY_MS = 6000;
const iconLink = "hover:text-accent hover:-translate-y-1 duration-300";
const arrowBtn =
  "w-11 h-11 rounded-full border border-accent/40 text-accent text-2xl inline-flex items-center justify-center hover:bg-hoverColor hover:border-accent duration-300";

const Projects = () => {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  const paginate = useCallback((dir: number) => {
    setSlide(([i]) => [(i + dir + projects.length) % projects.length, dir]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, index, paginate]);

  const p = projects[index];

  return (
    <section id="project" className="section-y bg-surface">
      <div className="container-x">
      <SectionTitle title="Some Things I Have Built" titleNo="03 — Featured work" />
      <Reveal>
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl border border-accent/20 bg-white shadow-xl shadow-accent/10">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.35 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) paginate(1);
                  else if (info.offset.x > 80) paginate(-1);
                }}
                className="grid grid-cols-1 lgl:grid-cols-2 gap-0 cursor-grab active:cursor-grabbing"
              >
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block bg-white lgl:border-r border-accent/10"
                  draggable={false}
                >
                  <Image
                    className="w-full h-full object-contain group-hover:scale-105 duration-500 select-none"
                    src={p.image}
                    alt={p.title}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent duration-300"></div>
                </a>
                <div className="p-6 md:p-10 flex flex-col justify-center gap-5">
                  <div>
                    <p className="font-titleFont text-accent text-sm tracking-wide">
                      Featured Project · {index + 1}/{projects.length}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold mt-1">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-textDark leading-relaxed">
                    {p.description}
                  </p>
                  <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="px-3 py-1 rounded-full bg-hoverColor text-accent"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl flex gap-4 text-textLight">
                    <a
                      className={iconLink}
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <TbBrandGithub />
                    </a>
                    <a
                      className={iconLink}
                      href={profile.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <AiOutlineYoutube />
                    </a>
                    <a
                      className={iconLink}
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                    >
                      <RxOpenInNewWindow />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => paginate(-1)}
              className={arrowBtn}
              aria-label="Previous project"
            >
              <HiChevronLeft />
            </button>
            <div className="flex items-center gap-2">
              {projects.map((proj, i) => (
                <button
                  key={proj.title}
                  onClick={() => setSlide([i, i > index ? 1 : -1])}
                  aria-label={`Go to ${proj.title}`}
                  className={`h-2 rounded-full duration-300 ${
                    i === index
                      ? "w-8 bg-accent"
                      : "w-2 bg-textDark/50 hover:bg-accent/60"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className={arrowBtn}
              aria-label="Next project"
            >
              <HiChevronRight />
            </button>
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  );
};

export default Projects;
