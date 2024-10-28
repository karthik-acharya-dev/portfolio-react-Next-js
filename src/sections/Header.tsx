"use client";

import { useState, useEffect } from "react";

export const Header = () => {
  const [active, setActive] = useState("Home");

  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActive(section);
  };

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = ["Home", "Projects", "About", "Contact"];
      const scrollPos = window.scrollY + 110;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {["Home", "Projects", "About", "Contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-item ${
              active === section
                ? "bg-white text-gray-900"
                : "hover:bg-white/30 hover:text-gray-900"
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll(section);
            }}
          >
            {section}
          </a>
        ))}
      </nav>
    </div>
  );
};
