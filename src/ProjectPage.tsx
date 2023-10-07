import React from "react";
import { ProjectCard } from "./ProjectCard";
import { useParams } from "react-router";

import useCatalog from "./useCatalog";
import { Badge, Button, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectPage: React.FC<{ }> = ({  })  => {
  const project = useCatalog(useParams().id) as Project;
  return (
    <Card
      style={{ marginBottom: "20px", width: "100%" }}
      className="text-start"
    >
      <Card.Header>{project.start_date}</Card.Header>
      <Card.Body>
        <Card.Title>
            {project.project_name}
        </Card.Title>
        <Card.Text>
        {project.project_description}

        </Card.Text>
        <div className="row">
          <div className="text-start col-sm-6 align-items-center d-flex">
            <Stack direction="horizontal" gap={2}>
              {project.participation_tasks
                .split(", ")
                .slice(0, 5)
                .map((task, index) => (
                  <Badge key={index} bg="primary" pill>
                    {ToTitleCase(task)}
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
  )
};

function ToTitleCase(str: string) {
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

export default ProjectPage;
