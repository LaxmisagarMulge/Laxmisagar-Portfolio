import type { ReactNode } from "react";
import {
  Code2,
  Database,
  BrainCircuit,
  Wrench,
} from "lucide-react";
import "./Skills.css";

type SkillGroup = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Development",
    description:
      "Building responsive interfaces and full-stack applications.",
    icon: <Code2 size={22} />,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    number: "02",
    title: "Backend & Data",
    description:
      "Working with APIs, databases, backend logic, and application architecture.",
    icon: <Database size={22} />,
    skills: [
      "Node.js",
      "REST APIs",
      "Supabase",
      "SQL",
      "PostgreSQL",
    ],
  },
  {
    number: "03",
    title: "AI & Data Science",
    description:
      "Exploring artificial intelligence, machine learning, and data-driven systems.",
    icon: <BrainCircuit size={22} />,
    skills: [
      "Python",
      "Data Analysis",
      "Machine Learning",
      "AI",
      "Generative AI",
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description:
      "Using modern tools to design, develop, test, and ship projects.",
    icon: <Wrench size={22} />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Vercel",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-heading skills-heading">
          <span className="section-number">02</span>

          <div>
            <p className="section-label">
              SKILLS & TECHNOLOGIES
            </p>

            <h2>
              Tools I use to
              <br />
              <span>build things.</span>
            </h2>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>
              <div className="skill-card-top">
                <span className="skill-number">
                  {group.number}
                </span>

                <div className="skill-icon">
                  {group.icon}
                </div>
              </div>

              <h3>{group.title}</h3>

              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;