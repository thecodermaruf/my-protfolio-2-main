import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ModeToggle } from "@/lib/theme/mode-toggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-emerald-600 dark:text-emerald-400 font-semibold border-b-2 border-emerald-600 dark:border-emerald-400 pb-1"
      : "text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-[100] ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-lg"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-[30px] font-bold text-emerald-600 dark:text-emerald-400">
            MARUF.
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 items-center">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={linkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          {/* ✅ Dark Mode Toggle */}
          <ModeToggle />
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="lg:hidden bg-white dark:bg-gray-900 shadow-md"
        >
          <ul className="flex flex-col gap-4 p-6">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={linkClass}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

            {/* ✅ Dark Mode Toggle (Mobile) */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <ModeToggle />
            </div>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
