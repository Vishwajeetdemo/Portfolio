// Single source of truth for personal details, links and navigation.
export const profile = {
  name: "Vishwajeet Kumar",
  email: "vishwajeet.kumar0205@gmail.com",
  resume: "/assets/Vishwajeet.pdf",
  github: "https://github.com/Vishwajeetdemo",
  youtube: "https://www.youtube.com/@knowledgedevelopmenttech",
  linkedin: "https://www.linkedin.com/in/vishwajeet-kumar-677891189",
  facebook: "https://www.facebook.com/vishwajeet.vishwajeet.961993",
  instagram: "https://www.instagram.com/vishwajeetkumar504",
};

export const navLinks = [
  { id: "home", label: "Home", no: "" },
  { id: "about", label: "About", no: "01." },
  { id: "experience", label: "Experience", no: "02." },
  { id: "project", label: "Projects", no: "03." },
  { id: "contact", label: "Contact", no: "04." },
];

export const roles = [
  "Full-Stack Developer",
  "Generative AI Engineer",
  "RAG & Agentic AI Builder",
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT / OAuth", "WebSockets"],
  },
  {
    title: "AI / LLM",
    items: ["Generative AI", "LLMs", "RAG", "Agentic AI", "Vector Databases"],
  },
  {
    title: "Data & DevOps",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Docker", "AWS", "Git & CI/CD"],
  },
];
