import { ArrowUpRight, Trophy } from "lucide-react";
import "./Hackathons.css";

type Hackathon = {
  number: string;
  event: string;
  year: string;
  organization: string;
  project: string;
  role: string;
  details?: string;
};

const hackathons: Hackathon[] = [
  {
    number: "01",
    event: "Yugaantar Devforge",
    year: "2025",
    organization: "Scalar School of Technology",
    project: "AnimGen AI",
    role: "API Integration & Backend Development",
    details: "Worked as part of a 4-person team.",
  },
  {
    number: "02",
    event: "Prometeo'26",
    year: "2026",
    organization: "IIT Jodhpur",
    project: "Hackathon Project",
    role: "UI/UX Designer",
  },
  {
    number: "03",
    event: "Smart India Hackathon",
    year: "2026",
    organization: "SIH • Problem Statement 188",
    project: "AI-Based Fake Identity & Document Screening System",
    role: "UI/UX Designer • Frontend Developer • Prompt Engineer",
  },
];

function Hackathons() {
  return (
    <section id="hackathons" className="hackathons">
      <div className="hackathons-container">
        <div className="hackathons-header">
          <div className="hackathons-heading">
            <p className="hackathons-number">04</p>

            <p className="hackathons-label">HACKATHONS & BUILDING</p>

            <h2>
              Learning by
              <br />
              <span>building.</span>
            </h2>

            <p className="hackathons-intro">
              Hackathons have been one of the ways I learn fastest — working
              with teams, exploring unfamiliar technologies, and turning ideas
              into working solutions under constraints.
            </p>
          </div>

          <div className="hackathons-stat">
            <Trophy size={25} />
            <strong>20+</strong>
            <span>Hackathons</span>
          </div>
        </div>

        <div className="hackathons-list">
          {hackathons.map((hackathon) => (
            <article className="hackathon-card" key={hackathon.event}>
              <div className="hackathon-number">
                {hackathon.number}
              </div>

              <div className="hackathon-main">
                <div className="hackathon-topline">
                  <span>{hackathon.year}</span>
                  <span>{hackathon.organization}</span>
                </div>

                <h3>{hackathon.event}</h3>

                <p className="hackathon-project">
                  {hackathon.project}
                </p>

                <div className="hackathon-role">
                  <span>MY ROLE</span>
                  <p>{hackathon.role}</p>
                </div>

                {hackathon.details && (
                  <p className="hackathon-details">
                    {hackathon.details}
                  </p>
                )}
              </div>

              <ArrowUpRight
                className="hackathon-arrow"
                size={20}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hackathons;