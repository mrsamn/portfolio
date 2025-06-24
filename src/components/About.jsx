import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";

// Remove or replace this if styles.js is missing
const styles = {
  sectionSubText: "text-sm text-secondary uppercase tracking-wider",
  sectionHeadText: "text-3xl sm:text-4xl font-bold text-white",
};

// Motion Variants
const fadeIn = (direction = "", type = "spring", delay = 0, duration = 0.75) => ({
  initial: { opacity: 0, x: direction === "right" ? 100 : direction === "left" ? -100 : 0 },
  animate: { opacity: 1, x: 0, transition: { type, delay, duration } },
});

const textVariant = () => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { type: "spring", duration: 1 } },
});

// Single card
const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="w-full xs:w-[250px] bg-tertiary rounded-[20px] p-5 shadow-lg flex flex-col items-center min-h-[280px]"
  >
    <img
      src={icon}
      alt={`${title} icon`}
      className="w-16 h-16 object-contain mb-4"
    />
    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
  </motion.div>
);

// About section
const About = () => {
  return (
    <div className="px-6 py-10 bg-[#050816] min-h-screen">
      <motion.div variants={textVariant()} initial="initial" animate="animate">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="initial"
        animate="animate"
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

      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
