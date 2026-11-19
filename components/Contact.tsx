import { FiMail } from "react-icons/fi";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="section-y bg-surface">
      <div className="container-x">
        <SectionTitle title="Get In Touch" titleNo="04 — What’s next?" />
        <Reveal className="max-w-2xl mx-auto rounded-2xl bg-white border border-accent/15 shadow-lg shadow-accent/5 p-8 md:p-12 text-center flex flex-col items-center gap-5">
          <span className="w-14 h-14 rounded-full bg-hoverColor text-accent text-2xl inline-flex items-center justify-center">
            <FiMail />
          </span>
          <p className="text-textDark text-base md:text-lg leading-relaxed">
            I’m always open to discussing new projects, full-stack roles and
            Generative AI ideas. Whether you have a question or just want to say
            hi, my inbox is open and I’ll get back to you as soon as I can.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="text-accent font-titleFont font-semibold break-all hover:underline"
          >
            {profile.email}
          </a>
          <a href={`mailto:${profile.email}`} className="btn-primary mt-2">
            Say Hello
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
