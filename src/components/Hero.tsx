import { ArrowDown, ArrowUpRight } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-glow"></div>

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-label">CSE • DATA SCIENCE • AI • FULL-STACK</p>

          <h1>
            Building ideas
            <br />
            into <span>real-world</span>
            <br />
            products.
          </h1>

          <p className="hero-description">
            I&apos;m Laxmisagar Mulge, a student who enjoys learning,
            building, experimenting, and turning ambitious ideas into
            real-world projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://github.com/LaxmisagarMulge"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-role">
            <span>01</span>
            <p>Full-Stack Developer</p>
          </div>

          <div className="hero-role">
            <span>02</span>
            <p>AI Builder</p>
          </div>

          <div className="hero-role">
            <span>03</span>
            <p>Hackathon Builder</p>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}

export default Hero;