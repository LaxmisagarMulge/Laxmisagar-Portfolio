import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            LAXMISAGAR<span>.</span>
          </a>

          <p>Building, learning, experimenting.</p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a
              href="https://github.com/LaxmisagarMulge"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/laxmisagar-mulge"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={17} />
            </a>
          </div>

          <a href="#" className="back-to-top">
            Back to top
            <ArrowUp size={16} />
          </a>

          <p className="footer-year">© {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;