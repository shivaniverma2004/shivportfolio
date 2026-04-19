import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const container = "max-w-5xl mx-auto px-6";

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0c10] text-black dark:text-white transition-colors">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur bg-white/70 dark:bg-[#0b0c10]/70 border-b border-gray-200 dark:border-gray-800 z-50">
        <div className={`${container} h-16 flex items-center justify-between`}>

          <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
            Know me !!
          </h1>

          <div className="flex items-center gap-6">

            {/* NAV LINKS */}
            <div className="hidden md:flex gap-8 text-sm text-gray-600 dark:text-gray-300">
              {["experience","education","skills","projects","contact"].map((item) => (
                <a key={item} href={`#${item}`} className="relative group capitalize">
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <button onClick={toggleDark}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-16 w-full bg-white dark:bg-[#0b0c10] border-b flex flex-col items-center py-6 gap-5 z-40">
          {["experience","projects","skills","education","contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">

        {/* Gradient */}
        <div className="absolute inset-0 -z-10 opacity-40 blur-3xl">
          <div className="w-[500px] h-[500px] bg-indigo-500 rounded-full absolute top-10 left-10"></div>
          <div className="w-[400px] h-[400px] bg-purple-500 rounded-full absolute bottom-10 right-10"></div>
        </div>

        <div className={container}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-light leading-tight"
          >
            Shivani
            <br />
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Verma
            </span>
          </motion.h1>

          <p className="mt-10 text-gray-600 dark:text-gray-400 text-lg">
            Computer Science student building AI-driven and user-focused applications across iOS and full-stack platforms. Experienced in SwiftUI, Spring Boot, and React, with strong fundamentals in DSA, system design, and scalable architecture.
            </p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full">
              View Work
            </a>
            <a href="/resume.pdf" target="_blank" className="px-6 py-3 border rounded-full">
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-gray-50 dark:bg-[#111318]">
        <div className={container}>
          <h2 className="text-2xl mb-8 font-medium">Experience</h2>

          <motion.div whileHover={{ y: -4 }}>
            <h3 className="text-lg font-medium">Infosys — iOS Developer Intern</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-xl">
              Developed a hospital management system using SwiftUI and Supabase.
              Improved UI performance by 30% and worked in Agile teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-24">
        <div className={container}>
          <h2 className="text-2xl mb-8 font-medium">Education</h2>

          <h3 className="text-lg font-medium">B.Tech Computer Science</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Galgotias University · 2022 — Present
          </p>
          <p className="text-gray-500 dark:text-gray-400">CGPA: 8.66</p>
        </div>
      </section>
      
      {/* SKILLS */}
      <section id="skills" className="py-24 bg-gray-50 dark:bg-[#111318]">
        <div className={container}>
          <h2 className="text-2xl mb-10 font-medium">Skills</h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-600 dark:text-gray-300">
            <div>
              <h4 className="font-medium">Languages</h4>
              <p className="mt-2 text-sm">Java, Swift, JavaScript</p>
            </div>
            <div>
              <h4 className="font-medium">Frameworks</h4>
              <p className="mt-2 text-sm">React, Spring Boot, SwiftUI</p>
            </div>
            <div>
              <h4 className="font-medium">Core CS</h4>
              <p className="mt-2 text-sm">DSA, OOP, DBMS</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24">
        <div className={container}>
          <h2 className="text-2xl mb-10 font-medium">Projects</h2>

          <div className="space-y-10">
            {[
              {
                title: "Dyslexia Reader",
                desc: "AI-based OCR + text-to-speech accessibility app.",
                link: "https://github.com/shivaniverma2004/DyslexiaReader.git"
              },
              {
                title: "Conversational AI Chatbot",
                desc: "Full-stack chatbot using Spring Boot and React."
              },
              {
                title: "Anumodya",
                desc: "Wellness app with mood tracking and scalable architecture.",
                link: "https://github.com/shivaniverma2004/anu.git"
              }
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-indigo-500 transition"
              >
                <div className="flex justify-between">
                  <h3 className="text-xl">{p.title}</h3>
                  {p.link && <a href={p.link}>↗</a>}
                </div>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center">
        <div className={container}>
          <h2 className="text-2xl font-medium">Get in touch</h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            vshivani911@gmail.com
          </p>

          <p className="text-gray-500 dark:text-gray-400">
            +91 8840141611
          </p>

          <div className="mt-4 flex justify-center gap-6 text-gray-500 dark:text-gray-400">
            <a
              href="https://github.com/shivaniverma2004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shivani-verma-3654b227a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}