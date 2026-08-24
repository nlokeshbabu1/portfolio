import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { WhatIDo } from "./sections/WhatIDo";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Writing } from "./sections/Writing";
import { Architecture } from "./sections/Architecture";
import { Exploring } from "./sections/Exploring";
import { GitHubSection } from "./sections/GitHubSection";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:text-[#04150d]"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <WhatIDo />
        <Experience />
        <Skills />
        <Projects />
        <Writing />
        <Architecture />
        <Exploring />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
