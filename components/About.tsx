import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hi, I am Vishwajeet Kumar, a passionate and experienced software developer specializing
            in React and Node.js. With 3 years of hands-on experience in full-stack development,
            I have successfully delivered numerous projects that combine
            rich user interfaces with robust server-side logic. Welcome to my portfolio!
          </p>

          <p>
            My journey in software development began start to college life, and I quickly found my niche in ,{" "}
            <span className="text-textGreen">
              full-stack development with React and Node.js.
            </span>
            I love building applications that not only look great but also perform exceptionally well under the hood.{" "}
            <span className="text-textGreen">
              Authentication and authorization with JWT and OAuth!
            </span>
          </p>
          
          <p>
            <ul>
              <li style={{fontWeight: 'bold',color:"Highlight"}}>Frontend Development with React</li>
              Building responsive and dynamic user interfaces using React.
              State management with Redux and Context API.
              Styling with CSS-in-JS, Styled Components, and Sass.
              Implementing client-side routing with React Router.
              Optimizing performance with code splitting and lazy loading.
              <li style={{ fontWeight: 'bold', color: "Highlight" }}>Backend Development with Node.js</li>
              <p>Developing RESTful APIs and GraphQL services with Node.js and Express.
                Real-time applications using WebSockets and Socket.io.
                Database integration with MongoDB, PostgreSQL, and MySQL.
                Authentication and authorization with JWT and OAuth.
                Containerization and deployment using Docker.</p>
            </ul>
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MySql
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              SQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
