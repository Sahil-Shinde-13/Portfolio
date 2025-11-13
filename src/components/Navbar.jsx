import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect scroll position for background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Detect active section
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      const scrollY = window.scrollY + 120; // offset for navbar height

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = sectionId;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between 
        px-6 md:px-10 py-4 transition-all duration-500 
        ${scrolled ? "backdrop-blur-lg bg-white/5 border-b border-white/10" : "bg-transparent border-transparent"}`}
    >
      {/* ========== Left: Logo ========== */}
      <a
        href="#home"
        className="text-2xl font-bold tracking-wide text-white/90 hover:text-purple-400 cursor-pointer"
      >
        Sahil Shinde
      </a>

      {/* ========== Desktop Navlinks ========== */}
      <ul className="hidden md:flex gap-10 text-lg font-medium">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`cursor-pointer relative group transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? "text-purple-400"
                  : "text-white/90"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="transition-all duration-300">{link.label}</span>
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-purple-400 rounded-full transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          </li>
        ))}
      </ul>

      {/* ========== Icons + Resume ========== */}
      <div className="hidden md:flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/sahil-shinde13/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/90 hover:text-purple-400 text-3xl transition-all hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Sahil-Shinde-13"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/90 hover:text-purple-400 text-3xl transition-all hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="/sahil-shinde-8182044040-p.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-purple-500 text-sm font-medium rounded-lg 
          text-white/90 hover:bg-purple-600/20 hover:shadow-[0_0_10px_rgba(168,85,247,0.6)] 
          transition-all duration-300"
        >
          Resume
        </a>
      </div>

      {/* ========== Mobile Menu Button ========== */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl text-white/90 hover:text-purple-400 transition-all"
        aria-label="Toggle mobile menu"
      >
        ☰
      </button>

      {/* ========== Mobile Menu ========== */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-neutral-900/95 backdrop-blur-md 
          border-t border-white/10 flex flex-col items-center py-6 space-y-6 md:hidden transition-all duration-500 ease-in-out"
        >
          {/* Socials + Resume */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/sahil-shinde13/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-purple-400 text-2xl transition-all hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Sahil-Shinde-13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-purple-400 text-2xl transition-all hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-purple-500 text-sm font-medium rounded-lg 
              text-white/90 hover:bg-purple-600/20 hover:shadow-[0_0_10px_rgba(168,85,247,0.6)] 
              transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col items-center gap-4 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-purple-400"
                      : "text-white/90 hover:text-purple-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
