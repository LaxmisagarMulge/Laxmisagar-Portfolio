import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  contribution: string;
  technologies: string[];
  github: string;
  live?: string;
  status: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "AnimGen AI",
    category: "AI • EDTECH • TEAM PROJECT",
    description:
      "An AI-powered educational animation platform that transforms plain-text explanations into structured animated visual content. Users enter a concept, Gemini processes the explanation, scenes are generated, and the resulting animation is displayed.",
    contribution:
      "Worked on Gemini API integration and backend development as part of a 4-person team.",
    technologies: [
      "HTML",
      "TypeScript",
      "Node.js",
      "Gemini API",
      "Gemini Veo",
    ],
    github: "https://github.com/LaxmisagarMulge/AnimGen-AI",
    status: "Completed • Demo currently unavailable",
  },
  {
    number: "02",
    title: "DocuTrust",
    category: "AI • GOVTECH • DOCUMENT VERIFICATION",
    description:
      "A web application designed to simplify government document verification by extracting information from documents uploaded through cameras or folders and checking the extracted information against government records to identify authentic or potentially tampered documents.",
    contribution:
      "Worked as the prompt engineer, designing and refining the prompts and AI-driven workflow used by the application.",
    technologies: ["TypeScript", "HTML", "CSS", "OCR", "AI"],
    github: "https://github.com/LaxmisagarMulge/DocuTrust",
    live: "https://docu-trust-eight.vercel.app/",
    status: "Live • Deployed on Vercel",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-heading">
            <p className="projects-number">03</p>

            <h2>
              Things I&apos;ve
              <br />
              <span>built.</span>
            </h2>

            <p>
              A selection of projects I&apos;ve worked on while learning,
              experimenting, and building real-world solutions.
            </p>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">{project.number}</div>

              <div className="project-content">
                <p className="project-category">{project.category}</p>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-contribution">
                  <strong>MY CONTRIBUTION</strong>
                  <p>{project.contribution}</p>
                </div>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <p className="project-status">{project.status}</p>
              </div>

              <div className="project-actions">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={17} />
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action"
                  aria-label={`Open GitHub repository for ${project.title}`}
                >
                  <FaGithub size={17} />
                  <span>GitHub</span>
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;