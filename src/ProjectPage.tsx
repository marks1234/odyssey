import React from "react";
import { useParams } from "react-router";
import useCatalog from "./useCatalog";
import { Badge, Button, Card, Container, Stack } from "react-bootstrap";
import "./App.css";
import { Link } from "react-router-dom";
import NavBar from "./marco/navbar/navbar";


const ProjectPage: React.FC<{ }> = ({  })  => {
  const project = useCatalog(useParams().id) as Project;
  return (
    <Container>
      {/* <section className="image-section"></section> */}
    <Card
      style={{ marginBottom: "20px", width: "100%" }}
      className="text-start"
    >
      <Card.Header>
        <Card.Title>
          {project.project_name}
        </Card.Title>
      </Card.Header>
      <Card.Body>

        <Card.Text>
        {project.project_description}
        </Card.Text>

        <Card.Text>
        Category: {project.fields_of_science}
        </Card.Text>

        <Card.Text>
        Project status: {project.project_status}
        </Card.Text>
        
        <Card.Text>
        Agency: {project.agency_sponsor}
        </Card.Text>

        <Card.Text>
        Location: {project.geographic_scope}
        </Card.Text>

        <Card.Text>
        Target audience: {ToTitleCase(project.participant_age)}
        </Card.Text>
        
        <Card.Text>
        Skills required: {ToTitleCase(project.participation_tasks)}
        </Card.Text>
        <Card.Text>
        Start date: {project.start_date}
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
        <Button>
        <Link to="/">
          Back to feed
        </Link>
        </Button>
      </Card.Body>
    </Card>
    </Container>

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
