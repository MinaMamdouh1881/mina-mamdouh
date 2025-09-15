"use client";

import { useEffect, useState } from "react";
import { FiGrid, FiUser, FiCode, FiMonitor, FiMail } from "react-icons/fi";

function NavigationBar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { text: "Home", id: "home", icon: FiGrid, href: "#home" },
    { text: "About Me", id: "about-me", icon: FiUser, href: "#about-me" },
    { text: "Skills", id: "skills", icon: FiCode, href: "#skills" },
    { text: "Works", id: "works", icon: FiMonitor, href: "#works" },
    { text: "Contact", id: "contact", icon: FiMail, href: "#contact" },
  ];

  return (
    <ul className="fixed top-1/2 left-0 md:left-5 z-50 flex flex-col gap-6 border rounded-t-full rounded-b-full py-3 px-1 bg-bg2 -translate-y-1/2">
      {links.map(({ id, text, icon: Icon, href }) => (
        <li
          key={id}
          data-text={text}
          className={`after-nav after:content-[attr(data-text)] ${
            active === id ? "bg-[#fff]" : ""
          }`}
        >
          <a href={href}>
            <Icon
              color={active === id ? "black" : "white"}
              className="text-[20px] md:text-[30px]"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavigationBar;
