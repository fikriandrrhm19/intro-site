import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Twitter, Instagram, Github } from "lucide-react";
import { SiMedium } from "react-icons/si";

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("hero");
  const [showButton, setShowButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeroFullyVisible, setIsHeroFullyVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const isHome = location.pathname === "/";
  const isContact = location.pathname === "/contact";

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroFullyVisible((prev) => {
          const visible = entry.intersectionRatio >= 0.98;
          return prev !== visible ? visible : prev;
        });
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(!isHeroFullyVisible);
    }, 150);
    return () => clearTimeout(timeout);
  }, [isHeroFullyVisible]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <AnimatePresence>
        {(isHome && isHeroFullyVisible && !isSmallScreen) || (isContact && !isSmallScreen) ? (
          <motion.nav
            key="navbar"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full bg-white shadow-md z-30"
          >
            <div className="max-w-screen-2xl mx-auto py-4 px-4 md:px-8 flex justify-between items-center">
              <div><a href="/" className="text-xl font-thin">@Fikri Andra Irham</a></div>
              <ul className="hidden md:flex space-x-6 text-gray-700">
                <li><a href="/#about" className="hover:text-blue-600 text-xl">About</a></li>
                <li><a href="/#recent-work" className="hover:text-blue-600 text-xl">Work</a></li>
                <li><a href="/contact" className="hover:text-blue-600 text-xl">Contact</a></li>
              </ul>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {!menuOpen && ((showButton && isHome && !isHeroFullyVisible) || (isContact && isSmallScreen)) && (
          <motion.button
            key="hamburger"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
            className="fixed top-2 right-6 z-50 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg focus:outline-none"
          >
            <Menu size={25} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.button
            key="close"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
            className="fixed top-2 right-6 z-50 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg focus:outline-none"
          >
            <X size={25} className="text-black" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-30"
            />
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: "5%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[70%] max-w-[700px] bg-black text-white z-40 flex flex-col justify-between"
            >
              <div className="flex justify-end p-6"></div>
              <div className="flex flex-col items-start px-10 space-y-6 text-4xl font-semibold">
                {["home", "about", "recent-work", "contact"].map((section) => (
                  <a
                    key={section}
                    onClick={() => {
                      toggleMenu();
                      setActiveSection(section);
                    }}
                    href={
                      section === "contact"
                        ? "/contact"
                        : section === "home"
                        ? "/"
                        : `/#${section}`
                    }
                    className="flex items-center space-x-4 group"
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeSection === section ? "bg-white" : "bg-gray-500 opacity-30"
                      }`}
                    />
                    <span className="capitalize group-hover:opacity-80 transition">
                      {section.replace("-", " ")}
                    </span>
                  </a>
                ))}
              </div>

              <div className="px-10 pb-10 text-sm text-white">
                <div className="border-t border-white/20 pt-6 flex justify-start gap-6 flex-wrap">
                  <a href="https://linkedin.com/in/fikriandrrhm" target="_blank" className="flex items-center gap-2 hover:text-white transition">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a href="https://github.com/fikriandrrhm19" target="_blank" className="flex items-center gap-2 hover:text-white transition">
                    <Github size={16} /> Github
                  </a>
                  <a href="https://medium.com/@fikri.andrhm" target="_blank" className="flex items-center gap-2 hover:text-white transition">
                    <SiMedium size={16} /> Medium
                  </a>
                  <a href="https://instagram.com/fikriandrrhm_" target="_blank" className="flex items-center gap-2 hover:text-white transition">
                    <Instagram size={16} /> Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
