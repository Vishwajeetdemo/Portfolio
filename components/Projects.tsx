import { amazonImg, cyberImg, noorShop, virtualEdu } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href=""
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              An Amazon clone website for visualizing personalized Amazon
              website. View your products, Add your account with{" "}
              <span className="text-textGreen">O-auth</span> and then make the
              purchage using <span className="text-textGreen">stripe</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Reactjs</li>
              <li>Javascript</li>
              <li>CSS</li>
              <li>MUI</li>
              <li>Netlify Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Vishwajeetdemo"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtube.com/@knowledgedevelopmenttech?si=noaycfVNJzQmZSV9"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://ecommersvishwajeet.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.blackegel.com"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={cyberImg}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Showroom Saree Website</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              <span className="text-textGreen">Showroom Saree</span> is a fully responsive and visually captivating e-commerce web application
              built to showcase and sell traditional sarees online. Developed using <span className="text-textGreen">React</span> for the frontend and styled with
              <span className="text-textGreen"> Tailwind CSS</span>, the platform delivers a smooth, modern user experience. It features an interactive product gallery,
              category-based filtering, a shopping cart, wishlist functionality, and customer-focused UI elements.
              <br />
              <br />
              The site emphasizes <span className="text-textGreen">performance, mobile-friendliness, and clean design</span>, making it ideal for
              boutique owners looking to establish a digital presence. It can be further expanded to include secure checkout, admin dashboard,
              and order management features for a complete online shopping solution.
            </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Node js</li>
              <li>React Js</li>
              <li>jwt-auth</li>
              <li>Redux</li>
              <li>React Hook Form</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Vishwajeetdemo"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtube.com/@knowledgedevelopmenttech?si=noaycfVNJzQmZSV9"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://showroomisaree.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href=""
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={noorShop}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">School Nexus</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              <span className="text-textGreen">School Nexus</span> is a web-based academic management platform designed to simplify how schools manage students, classes, and performance records.
              The system allows admins and teachers to efficiently handle class-wise student data, record and update marks, and monitor academic progress with ease.{" "}
              Built using <span className="text-textGreen">React</span> for the frontend and <span className="text-textGreen">Node.js</span> for the backend, the project leverages
              <span className="text-textGreen"> JWT authentication</span> for secure access and MongoDB for scalable data storage.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Node.js</li>
              <li>React.js</li>
              <li>MongoDB</li>
              <li>JWT-auth</li>
              <li>Tailwind CSS</li>
              <li>Deployment</li>
            </ul>

            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Vishwajeetdemo/blackegel"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtube.com/@knowledgedevelopmenttech?si=noaycfVNJzQmZSV9"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://school-nexus.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.blackegel.com"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={virtualEdu}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Virtual Edu Platform</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              <span className="text-textGreen">Virtual Edu</span> is an interactive and responsive educational web platform designed to help students access learning resources online.
              Built using <span className="text-textGreen">React</span> and styled with <span className="text-textGreen">Tailwind CSS</span>, the platform offers a smooth and accessible interface
              for exploring courses, reading blogs, and engaging with academic content.
              <br /><br />
              The goal of Virtual Edu is to create a digital learning ecosystem that is scalable and user-friendly. It supports features like
              categorized blog posts, detailed course listings, and a modern responsive layout to ensure a consistent experience across devices.
              The application structure also enables future integration with features like <span className="text-textGreen">login/authentication, admin content management, and video streaming</span>.
            </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React Js</li>
              <li>Tailwind CSS</li>
              <li>React Router</li>
              <li>Responsive Design</li>
              <li>Netlify Deployment</li>
            </ul>

            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Vishwajeetdemo"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtube.com/@knowledgedevelopmenttech?si=noaycfVNJzQmZSV9"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://virtual-edu.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
