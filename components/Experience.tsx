import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import Amazon from "./works/Amazon";
import Apple from "./works/Apple";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";
import RoyalCyber from "./works/RoyalCyber";

const jobs = [
  { key: "royalcyber", label: "Royal Cyber", component: <RoyalCyber /> },
  { key: "bss", label: "BSS", component: <Amazon /> },
  { key: "essl", label: "eSSL", component: <ReactBD /> },
  { key: "newton", label: "Newton school", component: <Google /> },
  { key: "acent", label: "Acent", component: <Apple /> },
];

const Experience = () => {
  const [active, setActive] = useState("royalcyber");

  return (
    <section id="experience" className="section-y">
      <div className="container-x">
        <SectionTitle title="Where I Have Worked" titleNo="02 — My journey" />

        <Reveal className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-10">
          {/* Tabs: horizontal scroll on mobile, vertical list on desktop */}
          <ul className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-accent/20 scrollbarHide">
            {jobs.map((job) => (
              <li key={job.key} className="shrink-0">
                <button
                  onClick={() => setActive(job.key)}
                  className={`w-full text-left whitespace-nowrap px-5 py-3 text-sm font-titleFont font-medium duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${
                    active === job.key
                      ? "border-accent text-accent bg-hoverColor"
                      : "border-transparent text-textDark hover:text-accent hover:bg-hoverColor"
                  }`}
                >
                  {job.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Details card */}
          <div className="rounded-xl bg-surface border border-accent/15 p-6 md:p-8 min-h-[340px]">
            {jobs.find((job) => job.key === active)?.component}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
