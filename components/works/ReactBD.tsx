import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        SOFTWARE ENGINEER
        <span className="text-textGreen tracking-wide">@eSSL</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Augst 2021 - 20 April 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <ul>
            <li> Integrating with back-end APIs, understanding RESTful principles, and managing data
              asynchronously to create dynamic and interactive web applications. 
              </li>
            <li>transform client requirements into stipulations or guidelines. </li>
            <li>Working with AWS Hosting IIS static Website and Truble-suttings. </li>
            <li>Working with React use Redux , Hooks, Axios for implimantes. </li>
            <li>Integrating with back-end APIs, understanding RESTful principles, and managing data
              asynchronously to create dynamic and interactive web applications. </li>
          </ul>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as JavaScript, TypeScript,
          React, CSS, HTML, Postman, Node Js
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of engineers, designers,
          producers, and clients on a daily basis
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
