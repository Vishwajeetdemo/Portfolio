import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const points = [
  {
    highlight: "Built full-stack applications",
    text: "using React, Next.js and Node.js, designing scalable REST APIs and responsive, high-performance user interfaces.",
  },
  {
    highlight: "Developed Generative AI solutions",
    text: "powered by Large Language Models (LLMs), including chatbots, content generation and intelligent assistants integrated into web applications.",
  },
  {
    highlight: "Implemented RAG (Retrieval-Augmented Generation) pipelines",
    text: "with embeddings and vector databases to deliver accurate, context-aware answers grounded in enterprise data.",
  },
  {
    highlight: "Designed Agentic AI workflows",
    text: "where autonomous agents use tools, memory and multi-step reasoning to automate complex business tasks.",
  },
];

const RoyalCyber = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer
        <span className="text-accent tracking-wide">  @Royal Cyber</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {points.map((p) => (
          <li key={p.highlight} className="text-base flex gap-2 text-textDark">
            <span className="text-accent mt-1">
              <TiArrowForward />
            </span>
            <p>
              <span className="text-accent">{p.highlight}</span> {p.text}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default RoyalCyber;
