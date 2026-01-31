import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-center md:text-left">
        {/* Left: Copyright */}
        <div>
          <p>© {new Date().getFullYear()} Web Developer : Abdullah Al-Maruf</p>
          <p className="mt-1 text-gray-400">Based in Dhaka, Bangladesh</p>
        </div>

        {/* Right: Links + Icons */}
        <div className="flex flex-col items-center md:items-end gap-4">
          {/* Quick Links */}
          <ul className="flex gap-4 flex-wrap justify-center md:justify-end">
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-blue-400 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-blue-400 transition duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/anwarulkarim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/anwarulkarim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/anwarulkarim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
