"use client";
import Module from "./Module";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { useState } from "react";

function Works() {
  const [all, setAll] = useState(false);
  const projects = [
    {
      hasDemo: true,
      title: "Weather App",
      description:
        "Responsive weather app with real-time data and geolocation using Next.js and OpenWeatherMap API.",
      image: "/weather-app-image.png",
      alt: "image of my weather app",
      githup: "https://github.com/MinaMamdouh1881/WeatherApp",
      demo: "https://weather-app-gold-one-67.vercel.app/",
      tech: ["Next.js", "Tailwind CSS"],
    },
    {
      hasDemo: false,
      title: "Chat App",
      description:
        "Real-time chat app with authentication and messaging using React and Socket.io.",
      image: "/chat-app.png",
      alt: "image of my chat app",
      githup: "https://github.com/MinaMamdouh1881/Chat-App---frontend",
      video: "/chat-app.mp4",
      tech: ["React", "Redux", "React-Query", "Socket.io", "Tailwind CSS"],
    },
    {
      hasDemo: true,
      title: "E-Commerce For Clients",
      description:
        "Full-featured e-commerce platform with authentication and shopping cart functionality.",
      image: "/e-commerce-for-clients.png",
      alt: "image of my e-commerce for clients app",
      githup: "https://github.com/MinaMamdouh1881/E-Commerce--frontend",
      demo: "https://m-m-e-commerce.netlify.app/",
      tech: ["React", "Redux", "Tailwind CSS"],
    },
    {
      hasDemo: true,
      title: "E-Commerce Admin Dashboard",
      description:
        "Admin panel for managing products and orders with real-time updates.",
      image: "/e-commerce-admin-dashboard.png",
      alt: "image of my e-commerce admin dashboard app",
      githup: "https://github.com/MinaMamdouh1881/E-Commerce--admin-panel",
      demo: "https://mm-e-commerce-admin.netlify.app/",
      tech: ["React", "Redux", "Tailwind CSS"],
    },
    {
      hasDemo: true,
      title: "Netflex Clone",
      description:
        "Netflix-inspired streaming platform with authentication and content management using Next.js.",
      image: "/netflex-clone.png",
      alt: "image of my netflex clone app",
      githup: "https://github.com/MinaMamdouh1881/NetflexClone",
      demo: "https://netflex-clone-phi.vercel.app/",
      tech: ["Next.js", "React", "MongoDB", "MUI"],
    },
    {
      hasDemo: true,
      title: "Lava Landing Page",
      description:
        "Modern landing page with smooth animations using Next.js and Framer Motion.",
      image: "/lava-landing-page.png",
      alt: "image of my lava landing page",
      githup: "https://github.com/MinaMamdouh1881/Lava-Landing-Page",
      demo: "https://lava-landing-page-theta.vercel.app/",
      tech: ["Next.js", "Framer Motion"],
    },
    {
      hasDemo: true,
      title: "To Do App",
      description: "Simple task management app with basic CRUD operations.",
      image: "/to-do.png",
      alt: "image of my to do app",
      githup: "https://github.com/MinaMamdouh1881/todo--fronend",
      demo: "https://2o-do.netlify.app/",
      tech: ["React", "Tailwind css"],
    },
    {
      hasDemo: true,
      title: "Bondi Theme",
      description: "Modern website template for graphic and web design.",
      image: "/bondi-theme.png",
      alt: "image of my bondi theme",
      githup: "https://github.com/MinaMamdouh1881/Bondi_Templet",
      demo: "https://minamamdouh1881.github.io/Bondi_Templet/",
      tech: ["Html", "Css", "Bootstrap"],
    },
    {
      hasDemo: true,
      title: "Elzero Template",
      description:
        "Personal website template showcasing life events and interests.",
      image: "/elzero-template.png",
      alt: "image of elzero template",
      githup: "https://github.com/MinaMamdouh1881/Elzero-Templet",
      demo: "https://minamamdouh1881.github.io/Elzero-Templet/",
      tech: ["Html", "Css", "js"],
    },
    {
      hasDemo: true,
      title: "Kasper Template",
      description:
        "Professional business website template with multiple service sections.",
      image: "/kasper-template.png",
      alt: "image of kasper template",
      githup: "https://github.com/MinaMamdouh1881/Kasper-Templet",
      demo: "https://minamamdouh1881.github.io/Kasper-Templet/",
      tech: ["Html", "Css"],
    },
    {
      hasDemo: true,
      title: "Leon Template",
      description:
        "Creative agency website template with modern design elements.",
      image: "/leon-template.png",
      alt: "image of leon template",
      githup: "https://github.com/MinaMamdouh1881/First-Project",
      demo: "https://minamamdouh1881.github.io/First-Project/",
      tech: ["Html", "Css"],
    },
  ];
  const displayedProjects = all ? projects : projects.slice(0, 6);
  return (
    <section
      id="works"
      className="bg-[url(/works-bg.png)] bg-center bg-contain py-[50px] flex flex-col items-center px-12 md:px-36"
    >
      <Module
        title="Works"
        desc="I had the pleasure of working with these awesome projects"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-bg1 rounded-lg shadow-md overflow-hidden group duration-300 hover:scale-103 hover:shadow-[0_0_8px_#12f7d6] flex flex-col"
          >
            <div className="flex-none">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="scale-105 transition-transform duration-500 group-hover:scale-110 aspect-[19/10]"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white h2-m">
                  {project.title}
                </h3>
                <p className="text-white mb-4 para-m">{project.description}</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex flex-wrap gap-5 px-5">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="code-m bg-bg2 text-white py-1 px-2 rounded-full duration-300 hover:text-black hover:bg-brand1 hover:scale-110 hover:font-semibold~"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-row justify-around my-4">
                <a
                  target="_blank"
                  href={project.githup}
                  className="bg-bg2 rounded-full duration-500 p-2 hover:bg-brand1 hover:scale-110 hover:rotate-12 hover:text-black hover:shadow-[0_0_15px_rgba(18,247,214,0.5)]"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  target="_blank"
                  href={project.hasDemo ? project.demo : project.video}
                  className="bg-bg2 rounded-full duration-500 p-2 hover:bg-brand1 hover:scale-110 hover:-rotate-12 hover:text-black hover:shadow-[0_0_15px_rgba(18,247,214,0.5)]"
                >
                  {project.hasDemo ? (
                    <FaExternalLinkAlt size={20} />
                  ) : (
                    <FaVideo size={20} />
                  )}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!all && (
        <button
          className="flex items-center justify-center gap-2 rounded-2xl button-u py-4 px-8 bg-bg1 border-2 border-brand1 text-white mt-main cursor-pointer hover:text-black hover:bg-brand1 duration-300"
          onClick={() => setAll(true)}
        >
          View All Projects
        </button>
      )}
    </section>
  );
}

export default Works;
