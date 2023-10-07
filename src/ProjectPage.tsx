import React from "react";
import { useParams } from "react-router";
import useCatalog from "./useCatalog";
import { Badge, Button, Card, Container, Modal, Stack } from "react-bootstrap";
import "./App.css";
import { Link } from "react-router-dom";
import Login from "./mauno/login";
import useUserInfo from "./useUserInfo";
import { arrayRemove, arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { db } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import CircularProgressBar from "./CircularProgressBar/CircularProgressBar";

const ProjectPage: React.FC<{}> = ({}) => {
  const project = useCatalog(useParams().id) as Project;
  const user = useUserInfo();
  const hasJoined = user?.projects?.includes(project.project_name);

  const toggleJoin = () => {
    if (!user?.uid) {
      return;
    }
    if (hasJoined) {
      updateDoc(doc(db, "users", user.uid), {
        projects: arrayRemove(project.project_name),
      });
    } else {
      updateDoc(doc(db, "users", user.uid), {
        projects: arrayUnion(project.project_name),
      });
    }
  };

  return (
    <Container>
      {/* <section className="image-section"></section> */}
      <Card
        style={{ marginBottom: "20px", width: "100%" }}
        className="text-start"
      >
        <Card.Header>
          <div className="row align-items-center">
            <div className="text-start col-sm-11">
              <Card.Title
                dangerouslySetInnerHTML={{
                  __html: project.project_name,
                }}
              ></Card.Title>
              <a
                href={project.project_url_external}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <FontAwesomeIcon icon={faExternalLink} />
              </a>
            </div>
            <div className="text-end col-sm-1">
              <CircularProgressBar
                percentage={project.match_percent}
              ></CircularProgressBar>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text
            dangerouslySetInnerHTML={{
              __html: project.project_description,
            }}
          ></Card.Text>

          <Card.Text>
            <b>Category</b>: {project.fields_of_science}
          </Card.Text>

          <Card.Text>
            <b>Project status</b>: {project.project_status}
          </Card.Text>

          <Card.Text>
            <b>Agency</b>: {project.agency_sponsor}
          </Card.Text>

          <Card.Text>
            <b>Location</b>: {project.geographic_scope}
          </Card.Text>

          <Card.Text>
            <b>Target audience</b>: {ToTitleCase(project.participant_age)}
          </Card.Text>

          <Card.Text>
            <b>Skills required</b>: {ToTitleCase(project.participation_tasks)}
          </Card.Text>
          <Card.Text>
            <b>Start date</b>: {project.start_date}
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
              <Button variant="outline-primary" onClick={toggleJoin}>
                {hasJoined ? "Leave" : "Join"} project
              </Button>
            </div>
          </div>
          <Button variant="link text-decoration-none">
            <Link to="/">Back to feed</Link>
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
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
