import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <p className="contact-number">05</p>
          <p className="contact-label">GET IN TOUCH</p>

          <h2>
            Have an idea?
            <br />
            <span>Let&apos;s build it.</span>
          </h2>

          <p className="contact-description">
            I&apos;m always interested in interesting ideas, projects,
            collaborations, and opportunities to learn and build something
            meaningful.
          </p>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/LaxmisagarMulge"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <div className="contact-link-left">
              <FaGithub size={21} />
              <div>
                <span>GITHUB</span>
                <strong>LaxmisagarMulge</strong>
              </div>
            </div>

            <ArrowUpRight size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/laxmisagar-mulge"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <div className="contact-link-left">
              <FaLinkedinIn size={21} />
              <div>
                <span>LINKEDIN</span>
                <strong>Connect with me</strong>
              </div>
            </div>

            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;