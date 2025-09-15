import React from "react";
import Module from "./Module";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { RiHtml5Line } from "react-icons/ri";
import { SiCss3 } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <RiHtml5Line size={40} />,
      name: "HTML",
    },
    {
      icon: <SiCss3 size={40} />,
      name: "CSS",
    },
    {
      icon: <IoLogoNodejs size={40} />,
      name: "JS",
    },
    {
      icon: <TbBrandNextjs size={40} />,
      name: "NEXT",
    },
    {
      icon: <SiTailwindcss size={40} />,
      name: "TAILWIND",
    },
    {
      icon: <TbBrandTypescript size={40} />,
      name: "TS",
    },
    {
      icon: <SiRedux size={40} />,
      name: "REDUX",
    },
    {
      icon: <FaReact size={40} />,
      name: "REACT",
    },
  ];
  return (
    <section
      id="skills"
      className="bg-[url(/skills-bg.png)] bg-center bg-cover py-[50px] flex flex-col items-center px-12 md:px-36"
    >
      <Module
        title="Skills"
        desc="I am striving to never stop learning and improving"
        code={true}
      />
      <div className="bg-brand2 p-5 text-center flex flex-col gap-2 rounded-2xl border-l-8 border-css my-16">
        <HiMiniComputerDesktop className="text-bg1 mx-auto" size={25} />
        <h3 className="text-bg1 menu-m">web developement</h3>
        <p className="text-grey para-m">HTML·CSS·JS·REACT</p>
      </div>
      <div className="grid max-md:grid-cols-2 grid-cols-4 gap-20">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className={`bg-${skill.name.toLowerCase()} p-8 rounded-full`}>
              {skill.icon}
            </span>
            <p className={`h2-m text-${skill.name.toLowerCase()}`}>
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
