import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Amazon = () => {
  //BSS
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        SOFTWARE ENGINEER
        <span className="text-textGreen tracking-wide">  @Bangalore Softsell Ltd.</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Augst 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            <span className="text-textGreen">Developed multiple full-stack web applications</span>
            {" "}
            using React for the front end and Node.js for the back end,
            leveraging Express.js for API development and MongoDB or PostgreSQL for database management.{" "}
            I love building applications that not only look great but also perform exceptionally well under the hood.
            Authentication and authorization with JWT and OAuth!
          </p>

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            <span className="text-textGreen">Implemented responsive UI/UX </span> {" "} with React and utilized state management
            libraries like Redux for efficient data flow and complex state handling.
          </p>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <p>
            <span className="text-textGreen">Integrated third-party APIs and created RESTful </span> {" "}services to support dynamic web applications,
            improving functionality and enhancing user experience.
            Optimized application performance by employing React best practices,
            reducing load times, and ensuring smooth interactions across devices.
            Collaborated with teams using version control (Git), Agile methodologies,
            and project management tools such as Jira and Eslint to deliver high-quality solutions on time.
            Deployed applications on platforms like Hostinger, Netlify, and AWS, ensuring smooth CI/CD pipelines and scalability.
          </p>
        </li>
      </ul>

    </motion.div>
  );
};

export default Amazon;
