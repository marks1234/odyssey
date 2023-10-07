import React from "react";
import { ProjectCard } from "./ProjectCard";
import { useParams } from "react-router";

import useCatalog from "./useCatalog";

const ProjectPage: React.FC<{}> = ({}) => {
  const project = useCatalog(useParams().id);

  return <ProjectCard project={project as Project} />;
};

export default ProjectPage;
