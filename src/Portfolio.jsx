import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Portfolio single-file React component (TailwindCSS required).

  How to use:
  1. Create a new React app (Vite or Create React App) and install dependencies:
     - framer-motion
     - react-icons (optional)
  2. Add TailwindCSS to the project (follow Tailwind docs).
  3. Place your CV PDF into the public/ folder as "George_Mwangi_CV_2025.pdf".
  4. Drop this file (Portfolio.jsx) into src/ and import it in App.jsx (or replace App.jsx).
  5. Deploy to GitHub Pages by pushing the repo and enabling Pages (or use gh-pages package).

  Notes:
  - All styling uses Tailwind classes. Tweak spacing, colors, and content as you like.
  - The component is intentionally self-contained and uses sample project entries drawn from your CV.
*/

const EXPERIENCE = [
  {
    company: "Agventure Limited",
    role: "IT Specialist",
    period: "Feb 2021 - Oct 2025",
    bullets: [
      "Online database development using Knack & AppSheet",
      "Palladium Accounting System support",
      "Weighbridge systems and security systems installation & management",
      "Firewall management and network troubleshooting",
      "Procurement & installation of IT equipment",
    ],
  },
  {
    company: "FSD Africa",
    role: "Assistant Software Developer",
    period: "2020 - 2021",
    bullets: [
      "Power Platform (Power Apps, Power Automate, Power BI)",
      "SharePoint, project coordination, system design & analysis",
    ],
  },
  {
    company: "Joetrix Infortech",
    role: "IT Consultant & Software Developer",
    period: "Jan 2020 - Aug 2020",
    bullets: [
      "Microsoft 365 administration, Windows Server 2012",
      "SharePoint and database management",
      "Client engagement and IT support",
    ],
  },
];

const SKILLS = [
  { name: "Project Management", level: 80 },
  { name: "System Development", level: 85 },
  { name: "Microsoft Power Platform", level: 75 },
  { name: "Online Databases (Knack, AppSheet)", level: 82 },
  { name: "Microsoft 365 / Google Suite", level: 78 },
  { name: "Security Systems & Firewalls", level: 70 },
  { name: "Weighbridge Systems", level: 65 },
];

const PROJECTS = [
  {
    title: "Online Database (Knack & AppSheet)",
    description:
      "Built and maintained online databases for operations and inventory, integrating forms and workflows for non-technical users.",
    tags: ["Knack", "AppSheet", "Databases"],
    link: "#",
  },
  {
    title: "Power Platform Solutions",
    description:
      "Developed Power Apps and Power Automate flows for reporting and simple automation for FSD Africa. Integrated with SharePoint and email workflows.",
    tags: ["Power Apps", "Power Automate", "Power BI"],
    link: "#",
  },
  {
    title: "Security & Weighbridge System Deployment",
    description:
      "Installed and managed CCTV, alarms, and weighbridge integrations at Agventure Limited — including network and firewall setup.",
    tags: ["CCTV", "Firewalls", "Weighbridge"],
    link: "#",
  },
];

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("gm_portfolio_dark");
    if (saved) setDark(saved === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("gm_portfolio_dark", dark ? "true" : "false");
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">George Mwangi</h1>
          <p className="text-sm mt-1">IT Professional — Cybersecurity • Systems • Power Platform</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/George_Mwangi_CV_2025.pdf"
            className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-500"
            download
          >
            Download CV
          </a>
          <button
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded-md border dark:border-gray-700"
            aria-label="Toggle dark mode"
          >
            {dark ? "🌙" : "🌤️"}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 grid gap-10 lg:grid-cols-3">
        {/* ABOUT + CONTACT */}
        <section className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-sm leading-relaxed">
            I am passionate about IT and its application in business. My experience as an IT consultant at Joetrix Limited,
            software developer at FSD Africa, and system administrator at Agventure Limited has further deepened my interest in the
            field, and I am eager to share my experience in related areas. I seek to work with an organisation that values continuous
            improvement and growth. I am self-motivated and hard-working, with ambitions to establish global connections in our
            networked world.
          </p>

          <div className="mt-6">
            <h3 className="font-medium">Contact</h3>
            <ul className="text-sm mt-2 space-y-1">
              <li>📞 +254 706609056</li>
              <li>✉️ <a href="mailto:mwangig25@gmail.com" className="underline">mwangig25@gmail.com</a></li>
              <li>📍 Nakuru, Kenya</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-medium">Languages</h3>
            <p className="text-sm">English (Fluent), Kiswahili (Intermediate)</p>
          </div>

          <div className="mt-6">
            <h3 className="font-medium">References</h3>
            <details className="mt-2 text-sm bg-gray-50 dark:bg-gray-700 p-3 rounded">
              <summary className="cursor-pointer">Show referees</summary>
              <ul className="mt-2 space-y-2">
                <li>
                  <strong>Johnny Onslow</strong> — Director, Gone Fishing<br />0722 687334 — jeonslow@fishingfliesasndlures.com
                </li>
                <li>
                  <strong>Matthew Rudd</strong> — Director of Corporate Services, FSD-Africa<br />+254733 625340 — matthew@fsdafrica.org
                </li>
                <li>
                  <strong>Giles Littlewood</strong> — CCO, Agventure Limited<br />+254728999990 — giles@agvke.com
                </li>
              </ul>
            </details>
          </div>
        </section>

        {/* MAIN CONTENT: Experience + Projects + Skills */}
        <section className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{exp.role}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company} • {exp.period}</p>
                    </div>
                    <button
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="text-sm px-3 py-1 rounded-md border"
                    >
                      {openIndex === idx ? "Hide" : "Details"}
                    </button>
                  </div>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-3 pl-4 list-disc text-sm space-y-1"
                      >
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {PROJECTS.map((p, i) => (
                <motion.article
                  key={p.title}
                  className="p-4 rounded-lg border bg-gray-50 dark:bg-gray-700"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm mt-2">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="mt-3">
                    <a href={p.link} className="text-sm underline">Learn more</a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="space-y-3">
              {SKILLS.map((s) => (
                <div key={s.name} className="">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      style={{ width: `${s.level}%` }}
                      className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-width duration-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <ul className="text-sm space-y-3">
              <li>
                <strong>CodeBrave — Cyber Security</strong> • 2021
              </li>
              <li>
                <strong>Chuka University — Diploma in Computer Science</strong> • 2018 - 2020
              </li>
              <li>
                <strong>Mama Ngina Kenyatta — KCSE</strong> • 2013 - 2016
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-sm">Want to work together or have questions? Send me a message or call.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const subject = encodeURIComponent(form.subject.value || "Portfolio inquiry");
                const body = encodeURIComponent(`Name: ${form.name.value}\n\n${form.message.value}`);
                window.location.href = `mailto:mwangig25@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="mt-4 space-y-3"
            >
              <div>
                <label className="text-sm block">Name</label>
                <input name="name" className="w-full rounded-md p-2 border bg-gray-50 dark:bg-gray-700" />
              </div>
              <div>
                <label className="text-sm block">Subject</label>
                <input name="subject" className="w-full rounded-md p-2 border bg-gray-50 dark:bg-gray-700" />
              </div>
              <div>
                <label className="text-sm block">Message</label>
                <textarea name="message" className="w-full rounded-md p-2 border bg-gray-50 dark:bg-gray-700" rows={4} />
              </div>
              <div>
                <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Send message</button>
              </div>
            </form>

            <div className="mt-6 text-sm">
              <p>Or reach me directly:</p>
              <ul className="mt-2">
                <li>Phone: +254 706609056</li>
                <li>Email: <a href="mailto:mwangig25@gmail.com" className="underline">mwangig25@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto p-6 text-center text-sm">
        <p>Built by George Mwangi • {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
