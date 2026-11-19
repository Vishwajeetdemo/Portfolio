import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { AiFillThunderbolt } from "react-icons/ai";
import { FiCode, FiCpu, FiServer } from "react-icons/fi";
import { skillGroups } from "@/lib/data";

const highlights = [
  {
    Icon: FiCode,
    title: "Modern Frontend",
    text: "Responsive, accessible interfaces with React, Next.js and Tailwind CSS.",
  },
  {
    Icon: FiServer,
    title: "Scalable Backend",
    text: "REST APIs, JWT / OAuth security and databases built with Node.js.",
  },
  {
    Icon: FiCpu,
    title: "Generative AI",
    text: "LLM apps, RAG pipelines and Agentic AI workflows for real use cases.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-y bg-surface">
      <div className="container-x">
        <SectionTitle title="About Me" titleNo="01 — Who I am" />

        <div className="grid lgl:grid-cols-2 gap-12 lgl:gap-16 items-start">
          {/* Bio */}
          <Reveal className="flex flex-col gap-5 text-textDark text-base md:text-lg leading-relaxed">
            <p>
              Hi, I’m Vishwajeet Kumar, a full-stack developer with{" "}
              <span className="text-accent font-semibold">
                4+ years of experience
              </span>{" "}
              building web applications that pair clean, responsive interfaces
              with robust server-side logic. I started programming in college
              and found my niche in the React and Node.js ecosystem.
            </p>
            <p>
              Today I work at{" "}
              <span className="text-accent font-semibold">Royal Cyber</span>,
              building products with React, Next.js and Node.js and designing{" "}
              <span className="text-accent font-semibold">
                Generative AI solutions using LLMs, RAG pipelines and Agentic AI
                workflows
              </span>
              . I care about software that looks great, performs well and solves
              a real problem.
            </p>

            <ul className="mt-3 flex flex-col gap-4">
              {highlights.map(({ Icon, title, text }) => (
                <li key={title} className="flex gap-4 items-start">
                  <span className="shrink-0 w-11 h-11 rounded-lg bg-hoverColor text-accent text-xl inline-flex items-center justify-center">
                    <Icon />
                  </span>
                  <div>
                    <h4 className="font-titleFont font-semibold text-textLight text-base">
                      {title}
                    </h4>
                    <p className="text-sm md:text-base">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Skills */}
          <Reveal delay={0.1}>
            <h3 className="font-titleFont font-semibold text-xl text-textLight mb-5">
              Technologies I work with
            </h3>
            <div className="grid grid-cols-1 sml:grid-cols-2 gap-5">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl bg-white border border-accent/15 p-5 shadow-sm hover:shadow-lg hover:shadow-accent/10 hover:border-accent/50 hover:-translate-y-1 duration-300"
                >
                  <h4 className="font-titleFont text-accent text-sm font-bold uppercase tracking-wider mb-4">
                    {group.title}
                  </h4>
                  <ul className="flex flex-col gap-2.5 text-sm font-titleFont text-textLight">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-accent shrink-0">
                          <AiFillThunderbolt />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
