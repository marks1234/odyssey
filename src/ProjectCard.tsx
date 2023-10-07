import React from "react";
import { Badge, Button, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCatalog from "./useCatalog";
import CircularProgressBar from "./CircularProgressBar/CircularProgressBar";
import useUserInfo from "./useUserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { arrayRemove, arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { db } from "./firebase";

export const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
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
    <Card
      style={{ marginBottom: "20px", width: "100%" }}
      className="text-start"
    >
      <Link to={`project/${project.project_id}`}>
        <Card.Header>
          <div className="row align-items-center">
            <div className="text-start col-sm-11">
              <Card.Title>{project.project_name}</Card.Title>
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
      </Link>
      <Card.Body>
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
      </Card.Body>
    </Card>
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

const ProjectCards: React.FC = () => {
  const projects = useCatalog() as Project[];
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
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
