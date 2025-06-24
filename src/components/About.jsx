import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Service Card
const ServiceCard = ({ index, title, icon, disableTilt = false }) => {
  const cardContent = (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
        <img
          src={icon}
          alt={title ? `${title} icon` : "service icon"}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center mt-4">
          {title || "Service"}
        </h3>
      </div>
    </motion.div>
  );

  return disableTilt ? (
    <div className="xs:w-[250px] w-full">{cardContent}</div>
  ) : (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      className="xs:w-[250px] w-full"
    >
      {cardContent}
    </Tilt>
  );
};

// About Section
const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Full Stack Developer with expertise in the MERN Stack (MongoDB,
        Express, React, Node.js), Generative AI, AWS Cloud, and DevOps
        automation. I also create immersive 3D web experiences using Three.js,
        adding visual depth and interactivity to modern web applications. My
        work blends intuitive frontends, intelligent backends, AI-driven
        features, and scalable cloud infrastructure — delivering high-performance,
        future-ready digital solutions from end to end.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            disableTilt={isMobile}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
