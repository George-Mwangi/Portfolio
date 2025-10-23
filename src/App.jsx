import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./Portfolio.jsx";

function About() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p>I’m George Mwangi, an IT professional passionate about cybersecurity, automation, and software development.</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <p>Here you’ll soon find my highlighted projects including Power Apps, databases, and security system deployments.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p>Email: <a href="mailto:mwangig25@gmail.com" className="underline">mwangig25@gmail.com</a></p>
      <p>Phone: +254 706 609 056</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="flex justify-center space-x-6 bg-indigo-600 text-white p-4 shadow">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
