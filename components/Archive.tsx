import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="more-work" className="section-y">
      <div className="container-x">
      <SectionTitle title="Other Noteworthy Projects" titleNo="More work" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ArchiveCard
          title="E-Commers website Working This Project"
          des="Developed an web application using the MERN (MongoDB, Express.js, React, Node.js) stack. 
          Implemented features including user authentication, product browsing, shopping cart management, 
          and checkout functionality. Utilized React for building responsive user interfaces,
           Node.js for backend logic, and MongoDB for data storage. 
           Integrated third-party APIs for payment processing"
          listItem={["Reactjs", "Nodejs", "JavaScript"]}
          link=""
        />
        
        
        <ArchiveCard
          title="Amazon Clone , cart-option and payment intrigation."
          des=" Developed an Amazon clone web application using the MERN 
          ( MUI, React, JavaScript) stack. Implemented features 
           product browsing, shopping cart management, 
          and checkout functionality. Utilized React for building responsive user interfaces, 
          .Integrated third-party APIs for"
          listItem={["Reactjs", " CSS", "JavaScript"]}
          link="https://647ebb5414d078602a0c889b--cozy-baklava-fd337c.netlify.app/"
        />
        
        <ArchiveCard
          title="School Project for US Client, Authentication: JWT (JSON Web Tokens), Learforlife Brand"
          des="This project involved building both the front-end and back-end using React and Node.js, where React handled the user interface, and Node.js provided the server-side functionality with a MongoDB database to store user data."
          listItem={[
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "JWT",
            "CSS",
            "HTML",
          ]}
          link="https://learn4life.org/"
        />


        {showMore && (
          <>
            <motion.div
              className="h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="School Project for US Client, Authentication: JWT (JSON Web Tokens), llac Brand"
                des="This project involved building both the front-end and back-end using React and Node.js, where React handled the user interface, and Node.js provided the server-side functionality with a MongoDB database to store user data."
                listItem={[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Express.js",
                  "JWT",
                  "CSS",
                  "HTML",
                ]}
                link="https://llac.org/"
              />
            </motion.div>
            <motion.div
              className="h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="School Project for US Client, Authentication: JWT (JSON Web Tokens), holston Brand"
                des="This project involved building both the front-end and back-end using React and Node.js, where React handled the user interface, and Node.js provided the server-side functionality with a MongoDB database to store user data."
                listItem={[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Express.js",
                  "JWT",
                  "CSS",
                  "HTML",
                ]}
                link="https://holstonacademy.org/"
              />
            </motion.div>
            <motion.div
              className="h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="School Project for US Client, Authentication: JWT (JSON Web Tokens), elev8school Brand"
                des="This project involved building both the front-end and back-end using React and Node.js, where React handled the user interface, and Node.js provided the server-side functionality with a MongoDB database to store user data."
                listItem={[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Express.js",
                  "JWT",
                  "CSS",
                  "HTML",
                ]}
                link="https://elev8schools.org/"
              />
            </motion.div>
            <motion.div
              className="h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* <ArchiveCard
                title="Shoppers Online Shopping Market"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "react-slick", "redux-toolkit"]}
                link="https://shoppersyt.vercel.app/"
              /> */}
            </motion.div>
            <motion.div
              className="h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* <ArchiveCard
                title="Single Page Personalized Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://portfoliotwo.reactbd.com/"
              /> */}
            </motion.div>
            <motion.div
              className="h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* <ArchiveCard
                title="Nextjs Dynamic Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://portfoliothree.reactbd.com/"
              /> */}
            </motion.div>
            <motion.div
              className="h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {/* <ArchiveCard
                title="Bazaar - A Modern Shopping app"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://bazar.reactbd.com/"
              /> */}
            </motion.div>
            <motion.div
              className="h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
             {/*  <ArchiveCard
                title="Blog101 Application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth"]}
                link="https://blog101.reactbd.com/"
              /> */}
            </motion.div>
            <motion.div
              className="h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
             {/*  <ArchiveCard
                title="Todo application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://youtubetodo.vercel.app/"
              /> */}
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="btn-outline"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="btn-outline"
          >
            Show More
          </button>
        )}
      </div>
      </div>
    </section>
  );
};

export default Archive;
