import React from "react";
import catalogRaw from "./assets/catalog.json";

const catalog = catalogRaw as CitizenScienceFeed;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px" }}>
      <h3>{project.project_name}</h3>
      <p>{project.project_description}</p>
      <a
        href={project.project_url_external}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Project
      </a>
    </div>
  );
};

const ProjectCards: React.FC = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {catalog._project.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
