import React from "react";
import { Badge, Button, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCatalog from "./useCatalog";

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card
      style={{ marginBottom: "20px", width: "100%" }}
      className="text-start"
    >
      <Card.Header>{project.start_date}</Card.Header>
      <Card.Body>
        <Card.Title>
          <Link to={`project/${project.project_id}`}>
            {project.project_name}
          </Link>
        </Card.Title>
        <Card.Text>
          {truncateString(project.project_description, 220)}
        </Card.Text>
        <div className="row">
          <div className="text-start col-sm-6 align-items-center d-flex">
            <Stack direction="horizontal" gap={2}>
              {project.participation_tasks
                .split(", ")
                .slice(0, 5)
                .map((task, index) => (
                  <Badge key={index} bg="primary" pill>
                    {toTitleCase(task)}
                  </Badge>
                ))}
            </Stack>
          </div>
          <div className="text-end col-sm-6">
            <a
              href={project.project_url_external}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">Visit Project</Button>
            </a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

function toTitleCase(str: string) {
  return str
    .split(",")
    .map((item) =>
      item
        .trim()
        .replace(/_/g, " ")
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    )
    .join(", ");
}

const ProjectCards: React.FC = () => {
  const projects = useCatalog() as Project[];
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

function truncateString(str: string, length: number) {
  if (str.length <= length) {
    return str;
  }
  return str.substring(0, length - 3) + "...";
}

export default ProjectCards;
