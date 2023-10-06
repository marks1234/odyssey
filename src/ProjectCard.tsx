import React, { useState } from "react";
import catalogRaw from "./assets/catalog.json";

const catalog = catalogRaw as CitizenScienceFeed;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px" }}>
      <h3>{project.project_name}</h3>
      <ReadMore text={project.project_description} maxLength={200}></ReadMore>
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

const ReadMore = ({ text, maxLength }: { text: string; maxLength: number }) => {
  const [showFullText, setShowFullText] = useState(false);

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  const buttonStyle = {
    fontSize: "0.75rem", // smaller font size
    padding: "3px 5px", // reduced padding
    margin: "0 5px", // some margin around the button
    cursor: "pointer", // hand cursor on hover
    border: "1px solid #ccc", // border
    borderRadius: "3px", // rounded corners
  };

  return (
    <span>
      {showFullText ? text : `${text.substring(0, maxLength)}... `}
      <button
        onClick={() => setShowFullText(!showFullText)}
        style={buttonStyle}
      >
        {showFullText ? "Read Less" : "Read More"}
      </button>
    </span>
  );
};

export default ProjectCards;
