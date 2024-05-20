import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MERN Stack Developer
        <span className="text-textGreen tracking-wide">@Newton school Traning</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        April 2022 - Dec 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          SKIL: JavaScript, HTML5, CSS, Data structures
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Proficient in implementing and utilizing fundamental data structures
          such as arrays, linked lists, stacks,
          queues, trees, and graphs in Java. Experienced in optimizing algorithms for efficiency and scalability,
          with a strong understanding of time and space complexities.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
           Participated in various contests organized by Newton School Worked on various projects. 
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
