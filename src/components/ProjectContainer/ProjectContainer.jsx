import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { v4 as uuid4 } from "uuid";
import "./ProjectContainer.css";

export default function ProjectContainer({ projectArray }) {
  // takes an array of objects with title, url, and deployedURL properties

  return (
    <div className="project-container">
      {projectArray.map((project) => (
        <ProjectCard title={project.title} url={project.url} key={uuid4()} />
      ))}
    </div>
  );
}