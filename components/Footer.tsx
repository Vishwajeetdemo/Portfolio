import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-accent/20 py-10">
      <div className="container-x flex flex-col items-center gap-5 text-center">
        <SocialLinks className="flex flex-wrap justify-center gap-3" />
        <p className="text-xs md:text-sm font-titleFont tracking-wide text-textDark">
          Designed &amp; built by{" "}
          <span className="text-accent font-semibold">Vishwajeet Kumar</span> ·
          Next.js, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
