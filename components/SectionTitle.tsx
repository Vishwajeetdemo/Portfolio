interface Props {
  title: string;
  titleNo: string;
}

// Centered section heading: small indigo eyebrow, big title, short underline.
const SectionTitle = ({ title, titleNo }: Props) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <p className="font-titleFont text-accent text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
        {titleNo}
      </p>
      <h2 className="font-titleFont text-3xl md:text-4xl font-bold mt-3 text-textLight">
        {title}
      </h2>
      <span className="block w-16 h-1 bg-gradient-to-r from-accent to-highlight rounded-full mx-auto mt-5"></span>
    </div>
  );
};

export default SectionTitle;
