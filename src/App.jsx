import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  Grid2X2,
  Layers,
  Mail,
  Menu,
  Moon,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sun,
  User,
  X,
} from "lucide-react";

const PROFILE = {
  name: "Shivani Verma",
  role: "Software Engineer | Full Stack & iOS Developer",
  location: "Greater Noida, India",
  email: "vshivani911@gmail.com",
  phone: "+91 8840141611",
  github: "https://github.com/shivaniverma2004",
  linkedin: "https://www.linkedin.com/in/shivani-verma-3654b227a",
  portfolio: "https://shivportfolio-one.vercel.app",
};

const ABOUT =
  "Final-year Computer Science student with experience in backend systems, mobile applications, and AI integration. Skilled in building scalable applications using Spring Boot and Swift, with a strong foundation in data structures, system design, and real-world problem solving. Passionate about creating impactful, user-focused digital products.";

const SKILLS = {
  Languages: ["Java", "Swift", "JavaScript"],
  Frontend: ["React", "HTML", "CSS"],
  Backend: ["Spring Boot", "REST APIs", "JWT Authentication"],
  Mobile: ["SwiftUI", "UIKit", "Core Data", "Vision Framework"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  Tools: ["Git", "GitHub", "Postman", "JIRA", "VS Code", "Xcode"],
  Cloud: ["Railway", "Render", "Vercel"],
};

const PROJECTS = [
  {
    name: "SpeakEasy",
    type: "Flagship AI + Mobile App",
    github: "https://github.com/shivaniverma2004/SpeakEasy",
    description: "AI-powered English learning app using OCR and Gemini API for real-world text processing.",
    features: [
      "OCR using Vision Framework",
      "Gemini API integration (summarization, quiz)",
      "Offline-first architecture",
      "Word learning and pronunciation tracking",
    ],
    tech: ["Swift", "SwiftUI", "Core Data", "Vision", "Gemini API"],
    highlights: ["Offline-first learning workflow", "AI-assisted adaptive study experience"],
    featured: true,
  },
  {
    name: "TaskManage",
    type: "Full Stack Web Application",
    github: "https://github.com/shivaniverma2004/TaskManage",
    description: "Role-based task management system with secure authentication and REST APIs.",
    features: ["JWT authentication", "Admin/Member roles", "Project & team management", "Deployed on Railway"],
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    highlights: ["Secure role-based architecture", "Production deployment on Railway"],
  },
  {
    name: "Anumodya",
    type: "Product Scale Mobile App",
    github: "https://github.com/shivaniverma2004/anu",
    description: "Wellness app inspired by Indian practices with mood tracking and guided experiences.",
    features: ["Mood tracking", "Goal system (Sankalp)", "Supabase backend", "Modular scalable architecture"],
    tech: ["Swift", "SwiftUI", "Supabase"],
    highlights: ["Structured wellness journeys", "Scalable modular mobile architecture"],
  },
  {
    name: "MiniRecipe",
    type: "Social App",
    github: "https://github.com/shivaniverma2004/MiniRecipeApp",
    description: "Social recipe platform with likes, follows, and activity tracking.",
    features: ["Social feed", "Likes and follows", "Activity tracker", "Realtime Supabase sync"],
    tech: ["SwiftUI", "Supabase"],
    highlights: ["Community-first interaction model", "Realtime social engagement flows"],
  },
  {
    name: "Dyslexia Reader",
    type: "Accessibility + AI iOS App",
    github: "https://github.com/shivaniverma2004/DyslexiaReader.git",
    description: "Offline iOS application designed to assist dyslexic users in reading and pronunciation.",
    features: [
      "Real-time text detection using Vision Framework",
      "Dyslexia-friendly text customization (font, spacing)",
      "Text-to-speech with adjustable speed",
      "Pronunciation evaluation with accuracy scoring",
      "Word basket for tracking learning progress",
      "Works fully offline without internet",
    ],
    tech: ["Swift", "SwiftUI", "Vision Framework", "AVFoundation", "Core Data"],
    highlights: ["Accessibility-focused design", "Real-world educational use case"],
  },
  {
    name: "AI Conversational Bot",
    type: "Full Stack AI Application",
    github: "https://github.com/shivaniverma2004",
    description: "Full-stack conversational system simulating human-like interactions using NLP techniques.",
    features: [
      "Custom conversational logic using NLP techniques",
      "Frontend-backend communication via REST APIs",
      "Automated response generation",
      "Simulated user interaction workflows",
    ],
    tech: ["Java", "Spring Boot", "JavaScript"],
    highlights: ["AI logic implementation", "Backend communication design", "System workflow automation"],
  },
];

const EXPERIENCE = {
  role: "iOS Developer Intern",
  company: "Infosys Limited",
  location: "Mysore",
  duration: "Mar 2025 - Apr 2025",
  details: [
    "Developed modules with Supabase API integration",
    "Worked in Agile Scrum teams using JIRA",
    "Focused on modular architecture and maintainable code",
  ],
};

const EDUCATION = [
  {
    degree: "B.Tech Computer Science",
    institute: "Galgotias University",
    duration: "2022 - 2026",
    score: "8.66/10",
  },
  {
    degree: "XII (ICSE)",
    institute: "St. John's School",
    duration: "2020 - 2021",
    score: "77%",
  },
];

const CERTIFICATIONS = [
  "Java Full Stack Development - Wipro TalentNext",
  "Software Engineering - NPTEL",
  "Compiler Design - NPTEL",
  "DSA (Java) - OnWingspan",
  "Database Design - Oracle Academy",
  "Design Thinking - Infosys",
  "HTML & CSS - IBM SkillsBuild",
];

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: Grid2X2 },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: ShieldCheck },
  { id: "contact", label: "Contact", icon: Mail },
];

const pageTransition = {
  initial: { opacity: 0, y: 18, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -16, filter: "blur(4px)" },
};

function GlassCard({ children, className = "" }) {
  return (
    <article
      className={`rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm shadow-slate-300/40 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/60 dark:shadow-none ${className}`}
    >
      {children}
    </article>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [dark, setDark] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});

  const type = {
    pageTitle: "text-2xl md:text-3xl font-semibold tracking-tight",
    cardTitle: "text-lg md:text-xl font-semibold tracking-tight",
    meta: "text-xs md:text-sm italic text-slate-500 dark:text-slate-400",
    body: "text-sm md:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300",
    subtle: "text-sm text-slate-600 dark:text-slate-300",
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme ? savedTheme === "dark" : true;
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const toggleProjectFlip = (projectName) => {
    setFlippedCards((prev) => ({
      ...prev,
      [projectName]: !prev[projectName],
    }));
  };

  const totalSkills = useMemo(
    () => Object.values(SKILLS).reduce((sum, group) => sum + group.length, 0),
    [],
  );

  const featuredProject = PROJECTS.find((project) => project.featured) || PROJECTS[0];

  const renderPage = () => {
    if (activePage === "dashboard") {
      return (
        <motion.div key="dashboard" {...pageTransition} transition={{ duration: 0.32 }} className="space-y-5">
          <GlassCard className="p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
                  <Sparkles size={14} />
                  Dashboard Overview
                </p>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{PROFILE.name}</h1>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 md:text-base">{PROFILE.role}</p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">{ABOUT}</p>
              </div>
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <User size={32} />
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="grid gap-4 md:grid-cols-3">
            <GlassCard>
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Total Projects</p>
              <p className="mt-3 text-3xl font-semibold">{PROJECTS.length}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">AI, full-stack, and product-scale mobile apps.</p>
            </GlassCard>
            <GlassCard>
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Skill Categories</p>
              <p className="mt-3 text-3xl font-semibold">{Object.keys(SKILLS).length}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{totalSkills} total skills across engineering domains.</p>
            </GlassCard>
            <GlassCard>
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Experience</p>
              <p className="mt-3 text-xl font-semibold">{EXPERIENCE.role}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Infosys internship with Agile + modular architecture.</p>
            </GlassCard>
          </div>

          <GlassCard className="md:p-7">
            <p className="text-xs uppercase tracking-wide text-indigo-300">Featured Build</p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">{featuredProject.name}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">{featuredProject.type}</p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">{featuredProject.description}</p>
              </div>
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                View on GitHub
                <ExternalLink size={15} />
              </a>
            </div>
          </GlassCard>
        </motion.div>
      );
    }

    if (activePage === "projects") {
      return (
        <motion.div key="projects" {...pageTransition} transition={{ duration: 0.3 }} className="space-y-4">
          <p className={type.subtle}>Tap cards to flip and view implementation details.</p>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
            {PROJECTS.map((project) => (
              <motion.button
                key={project.name}
                type="button"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                onClick={() => toggleProjectFlip(project.name)}
                className="group w-full text-left [perspective:1200px]"
                aria-label={`Flip ${project.name} project card`}
              >
                <div
                  className="relative h-[330px] sm:h-[345px] w-full transition-transform duration-500 [transform-style:preserve-3d]"
                  style={{ transform: flippedCards[project.name] ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  <GlassCard className="absolute inset-0 h-full [backface-visibility:hidden]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className={type.cardTitle}>{project.name}</h3>
                        <p className={type.meta}>{project.type}</p>
                      </div>
                      {project.featured && (
                        <span className="rounded-full border border-indigo-400/50 bg-indigo-500/15 px-2.5 py-1 text-xs text-indigo-700 dark:text-indigo-300">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className={`mt-3 ${type.body}`}>{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 transition dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
                      >
                        GitHub Repository
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </GlassCard>

                  <GlassCard className="absolute inset-0 h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="text-xs uppercase tracking-wide text-indigo-600 dark:text-indigo-300">Implementation</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {project.features.map((feature) => (
                        <li key={feature}>- {feature}</li>
                      ))}
                    </ul>

                    {project.highlights && (
                      <div className="mt-4">
                        <p className="text-xs uppercase tracking-wide text-emerald-600 dark:text-emerald-300">Highlights</p>
                        <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                          {project.highlights.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </GlassCard>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      );
    }

    if (activePage === "skills") {
      return (
        <motion.div key="skills" {...pageTransition} transition={{ duration: 0.3 }} className="space-y-4">
          <p className={type.subtle}>Stack grouped by engineering capability and delivery focus.</p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Object.entries(SKILLS).map(([category, items], idx) => (
              <GlassCard key={category} className="overflow-hidden border-indigo-100/80 dark:border-slate-700/70">
                <div className="mb-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                <h3 className="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-100">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 + skillIdx * 0.03, duration: 0.25 }}
                      className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      );
    }

    if (activePage === "experience") {
      return (
        <motion.div key="experience" {...pageTransition} transition={{ duration: 0.3 }} className="space-y-5">
          <GlassCard>
            <div className="relative pl-6">
              <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-indigo-500 to-transparent" />
              <span className="absolute -left-[5px] top-1 h-3 w-3 rounded-full bg-indigo-500" />
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{EXPERIENCE.duration}</p>
              <h3 className="mt-2 text-xl font-semibold">
                {EXPERIENCE.role} - {EXPERIENCE.company}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{EXPERIENCE.location}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {EXPERIENCE.details.map((detail) => (
                  <li key={detail}>- {detail}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Agile", "Scrum", "JIRA", "Supabase Integration", "Modular Architecture"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>

          <h2 className={type.pageTitle}>Education</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {EDUCATION.map((item) => (
              <GlassCard key={item.degree}>
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300">
                  <GraduationCap size={16} />
                  <p className="text-xs uppercase tracking-wide">{item.duration}</p>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{item.degree}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.institute}</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">Score: {item.score}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      );
    }

    if (activePage === "certifications") {
      return (
        <motion.div key="certifications" {...pageTransition} transition={{ duration: 0.3 }} className="space-y-4">
          <p className={type.subtle}>Verified learning credentials in software engineering and CS foundations.</p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {CERTIFICATIONS.map((cert, idx) => (
              <GlassCard key={cert} className="relative overflow-hidden">
                <div className="absolute right-3 top-3 rounded-md bg-emerald-100 px-2 py-1 text-[11px] font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                  #{idx + 1}
                </div>
                <div className="flex items-start justify-between gap-3 pr-10">
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{cert}</p>
                  <ShieldCheck size={17} className="text-emerald-500 dark:text-emerald-300" />
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div key="contact" {...pageTransition} transition={{ duration: 0.3 }} className="space-y-4">
        <GlassCard className="p-6 md:p-8">
          <p className="max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-200">
            Open to software engineering opportunities where I can contribute to product quality, system design, and
            scalable user experiences.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 transition dark:border-slate-700 dark:bg-slate-800/85 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              {PROFILE.email}
            </a>
            <a
              href={`tel:${PROFILE.phone}`}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 transition dark:border-slate-700 dark:bg-slate-800/85 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              {PROFILE.phone}
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 transition dark:border-slate-700 dark:bg-slate-800/85 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 transition dark:border-slate-700 dark:bg-slate-800/85 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              GitHub
            </a>
          </div>
          <a
            href={PROFILE.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-700 hover:text-indigo-600 dark:text-indigo-300 dark:hover:text-indigo-200"
          >
            Live Portfolio
            <ExternalLink size={14} />
          </a>
        </GlassCard>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f6f8ff] font-['Inter','SF_Pro_Display','system-ui'] text-slate-900 dark:bg-[#070b14] dark:text-slate-100 transition-colors">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="flex min-h-screen">
        <aside className="hidden w-[250px] shrink-0 border-r border-slate-200/70 bg-white/70 px-4 py-5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/55 lg:block">
          <div className="mb-8 flex items-center gap-2 px-2">
            <Rocket size={18} className="text-indigo-500 dark:text-indigo-400" />
            <p className="font-semibold">KNOW ME</p>
          </div>

          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-slate-100"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-xl border border-indigo-300/70 dark:border-indigo-400/30"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon size={16} className="relative z-10" />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/75 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-[#070b14]/75 sm:px-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  className="rounded-lg border border-slate-300 p-2 dark:border-slate-700 lg:hidden"
                  onClick={() => setMobileSidebarOpen(true)}
                  aria-label="Open sidebar"
                >
                  <Menu size={16} />
                </button>
                <div>
                  <h1 className="text-base font-semibold sm:text-lg">{NAV_ITEMS.find((item) => item.id === activePage)?.label}</h1>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-right text-xs dark:border-slate-700 dark:bg-slate-900/70 sm:block">
                  <p className="font-medium">{PROFILE.name}</p>
                  <p className="text-slate-500 dark:text-slate-400">{PROFILE.location}</p>
                </div>
                <button
                  onClick={toggleDark}
                  className="rounded-lg border border-slate-300 bg-white/60 p-2 hover:bg-slate-100 transition dark:border-slate-700 dark:bg-slate-900/70 dark:hover:bg-slate-800"
                  aria-label="Toggle theme"
                >
                  {dark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 p-4 sm:p-6">
            <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
          </main>
        </div>
      </div>

      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/55 lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 360, damping: 34 }}
              className="fixed inset-y-0 left-0 z-50 w-[260px] border-r border-slate-800 bg-[#0b1020] px-4 py-5 lg:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="font-semibold">Navigate</p>
                <button onClick={() => setMobileSidebarOpen(false)} className="rounded-md border border-slate-700 p-1.5">
                  <X size={15} />
                </button>
              </div>
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActivePage(item.id);
                        setMobileSidebarOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm ${
                        isActive ? "bg-indigo-500/25 text-indigo-200" : "text-slate-200 hover:bg-slate-800"
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}