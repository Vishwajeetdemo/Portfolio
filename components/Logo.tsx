// Brand logo: indigo "V" monogram badge only.
const Logo = () => (
  <span className="inline-flex items-center group" aria-label="Vishwajeet">
    <span className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-accentLight to-accent inline-flex items-center justify-center shadow-md shadow-accent/30 group-hover:rotate-6 duration-300">
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <path
          d="M5 7l8 18a1 1 0 0 0 1.8 0L23 7"
          fill="none"
          stroke="#fff"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="26" cy="7" r="2.2" fill="#fff" />
      </svg>
    </span>
  </span>
);

export default Logo;
