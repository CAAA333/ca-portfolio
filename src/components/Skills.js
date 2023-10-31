import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      // transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-32 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center mt-32 justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-3 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-3 md:p-2 xs:text-sm xs:p-2 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
          whileHover={{ scale: 1.05 }}
        >
          Enterprise Applications
        </motion.div>

        <Skill name="SQL" x="0vw" y="-30vw" />
        <Skill name="React/NextJS" x="-20vw" y="-25vw" />
        <Skill name="Python" x="15vw" y="-20vw" />
        <Skill name="Agile/Scrum/Jira" x="-5vw" y="-15vw" />
        <Skill name="Java" x="32vw" y="-10vw" />
        <Skill name="Excel/VBA" x="-15vw" y="10vw" />
        <Skill name="HTML/CSS/JS" x="-25vw" y="15vw" />
        <Skill name="C#/.Net" x="20vw" y="20vw" />
        <Skill name="AI/Machine Learning" x="0vw" y="25vw" />
        <Skill name="PowerBI/DAX" x="-18vw" y="30vw" />
        <Skill name="C++" x="18vw" y="35vw" />
      </div>
    </>
  );
};

export default Skills;
