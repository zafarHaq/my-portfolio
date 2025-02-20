"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";

const sections = ["home", "about", "projects", "resume", "contact"];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffsets = sections.map((section) => {
        const el = document.getElementById(section);
        return el ? el.offsetTop - 100 : 0;
      });

      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i]) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="A portfolio showcasing my work and experience"
        />
      </Head>

      <div className="relative">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-center space-x-4 shadow-md z-50">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              passHref
              className={`px-4 py-2 rounded-md transition ${
                activeSection === section ? "bg-blue-500" : "hover:bg-gray-700"
              }`}
            >
                {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Sections */}
        <section
          id="home"
          className="h-screen flex items-center justify-center bg-blue-500 text-white text-4xl font-bold"
        >
          Welcome to My Portfolio
        </section>

        <section
          id="about"
          className="h-screen flex items-center justify-center bg-gray-100 text-2xl"
        >
          About Me Section
        </section>

        <section
          id="projects"
          className="h-screen flex items-center justify-center bg-gray-200 text-2xl"
        >
          Projects Showcase
        </section>

        <section
          id="resume"
          className="h-screen flex items-center justify-center bg-gray-300 text-2xl"
        >
          Resume & Experience
        </section>

        <section
          id="contact"
          className="h-screen flex items-center justify-center bg-gray-400 text-2xl"
        >
          Contact Me
        </section>
      </div>
    </>
  );
}
