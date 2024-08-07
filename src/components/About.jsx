import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <a
        href={link || "#"} // If no link is provided, default to a placeholder
        target={link ? "_blank" : "_self"}
        rel={link ? "noopener noreferrer" : ""}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </a>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>👋 Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>🌟 Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello everyone! I'm Soumojit Banerjee, currently pursuing a B.Tech
        degree in Computer Science and Engineering at Techno India University
        (TIU). As a committed and industrious individual, I am always
        enthusiastic about going the extra mile to complete my projects and
        tasks. My expertise spans several programming languages and
        technologies, including C++, HTML5, CSS3, JavaScript, React, Bootstrap,
        and Tailwind CSS. With a strong passion for technology and
        problem-solving, I am eager to explore opportunities that will allow me
        to apply my skills and contribute to impactful and meaningful projects.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        If you would like to get in touch or explore potential opportunities,
        please feel free to contact me at my{" "}
        <a
          href="mailto:soumojitbanerjee22@gmail.com"
          className="text-blue-500 hover:underline"
        >
          email
        </a>{" "}
        📧. I look forward to connecting with you! 🤝
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            icon={service.icon}
            link={service.link} // Pass the link property
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
