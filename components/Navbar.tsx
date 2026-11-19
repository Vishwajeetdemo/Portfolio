import { useEffect, useState } from "react";
import Logo from "./Logo";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { navLinks, profile } from "@/lib/data";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Highlight the link of the section currently in view + add shadow on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setShow(false);
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = (id: string) =>
    `relative text-sm font-medium duration-300 hover:text-accent ${
      active === id ? "text-accent" : "text-textDark"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full h-20 bg-white/90 backdrop-blur-md border-b duration-300 ${
        scrolled ? "border-accent/20 shadow-navbarShadow" : "border-transparent"
      }`}
    >
      <div className="container-x h-full flex items-center justify-between font-titleFont">
        <a href="#home" onClick={(e) => go(e, "home")} aria-label="Home">
          <Logo />
        </a>

        {/* Desktop */}
        <nav className="hidden mdl:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => go(e, l.id)}
                  className={linkClass(l.id)}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-accent duration-300 ${
                      active === l.id ? "w-full" : "w-0"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !h-10 !px-5"
          >
            Resume
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setShow(true)}
          className="mdl:hidden w-8 h-8 flex flex-col justify-center gap-[6px]"
          aria-label="Open menu"
        >
          <span className="w-full h-[2px] bg-accent"></span>
          <span className="w-2/3 h-[2px] bg-accent"></span>
          <span className="w-full h-[2px] bg-accent"></span>
        </button>
      </div>

      {/* Mobile drawer */}
      {show && (
        <div
          onClick={() => setShow(false)}
          className="mdl:hidden absolute top-0 right-0 w-full h-screen bg-black/50 flex justify-end"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-[78%] max-w-sm h-full bg-white flex flex-col items-center px-6 py-16 relative shadow-2xl"
          >
            <MdOutlineClose
              onClick={() => setShow(false)}
              className="text-3xl text-accent cursor-pointer absolute top-5 right-5"
            />
            <ul className="flex flex-col items-center gap-7 text-lg">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => go(e, l.id)}
                    className={linkClass(l.id)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-8"
            >
              Resume
            </a>
            <SocialLinks className="flex flex-wrap justify-center gap-3 mt-8" />
            <a
              className="mt-8 text-sm text-accent break-all text-center"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
