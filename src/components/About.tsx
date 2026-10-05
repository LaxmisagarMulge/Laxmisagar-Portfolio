import { ArrowUpRight } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-heading">
          <span className="section-number">01</span>

          <div>
            <p className="section-label">ABOUT ME</p>

            <h2>
              Curious by nature.
              <br />
              <span>Builder by choice.</span>
            </h2>
          </div>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <p>
              I'm Sagar, a Computer Science student interested in
              building software that solves real problems.
            </p>

            <p>
              I enjoy working across development, AI, data, and
              product design while constantly experimenting with
              new technologies.
            </p>

            <p>
              A lot of my learning happens through projects and
              hackathons, where I get to turn an idea into something
              real under constraints.
            </p>
          </div>

          <div className="about-details">
            <div className="about-detail">
              <span>01</span>

              <div>
                <h3>Learn by building</h3>

                <p>
                  I learn best by working on real projects,
                  experimenting, breaking things, and fixing them.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <span>02</span>

              <div>
                <h3>Explore deeply</h3>

                <p>
                  I'm interested in full-stack development,
                  artificial intelligence, data, and emerging tools.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <span>03</span>

              <div>
                <h3>Build with purpose</h3>

                <p>
                  I care about turning technical ideas into
                  useful products rather than building for the
                  sake of writing code.
                </p>
              </div>
            </div>
          </div>
        </div>

        <a href="#skills" className="about-link">
          Explore my skills
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

export default About;