import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo" onClick={closeMenu}>
          LAXMISAGAR<span>.</span>
        </a>

        <div className="nav-links desktop-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#hackathons">Hackathons</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-socials desktop-socials">
          <a
            href="https://github.com/LaxmisagarMulge"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/laxmisagar-mulge"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#hackathons" onClick={closeMenu}>
          Hackathons
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <div className="mobile-socials">
          <a
            href="https://github.com/LaxmisagarMulge"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/laxmisagar-mulge"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;