import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Background (your radial gradient) */}
      <div
        className="fixed inset-0 -z-10 bg-neutral-950 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      />

      {/* Loader */}
      <AnimatePresence>{showLoader && <Loader />}</AnimatePresence>

      <header>
        <Navbar showContent={showContent} />
      </header>
      <div
        className={`relative min-h-screen text-white px-3 sm:px-6 md:px-8 py-8 transition-all duration-700 ${
          showLoader ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`}>

        <main>
          <Hero showContent={showContent} />
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        </main>
      </div>
    </>
  );
}
