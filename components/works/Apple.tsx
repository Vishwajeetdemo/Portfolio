import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Full Stack Developer
        <span className="text-textGreen tracking-wide">@Accent training institute</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Dec 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
             SKIL: JavaScript , React , Node, MongoDb
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Proficient in full-stack development utilizing React for frontend,
          Node.js for backend, and MongoDB for database management.
          Demonstrated ability to build responsive and interactive web applications,
          leveraging the MERN (MongoDB, Express.js, React, Node.js) stack to deliver scalable solutions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed and implemented a user interface using Material-UI and CSS
          for order replacement; integrated APIs with Axios for  requests and implemented a protected route using
          React-Router-Dom to ensure access only for authorized users.  
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
