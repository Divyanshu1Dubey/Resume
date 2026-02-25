import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject({ theme }) {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="main" id="projects">
      <div>
        <Fade bottom duration={1000} distance="20px">
          <h1 className="skills-heading" style={{ color: theme ? theme.text : "#000" }}>
            {bigProjects.title}
          </h1>
          <p
            className="subTitle project-subtitle"
            style={{ color: theme ? theme.secondaryText : "#868e96" }}
          >
            {bigProjects.subtitle}
          </p>
        </Fade>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            {bigProjects.projects.map((project, i) => {
              return (
                <Fade bottom duration={1000} distance="20px" key={i}>
                  <div
                    className="project-card"
                    onClick={() => openProjectInNewWindow(project.link)}
                    style={{
                      backgroundColor: theme ? theme.highlight : "#fff",
                    }}
                  >
                    <div className="project-card-image">
                      <img alt={project.name} src={project.image}></img>
                    </div>
                    <div className="project-card-details">
                      <h3
                        className="project-card-head"
                        style={{ color: theme ? theme.text : "#000" }}
                      >
                        {project.name}
                      </h3>
                      <p
                        className="project-card-description"
                        style={{
                          color: theme ? theme.secondaryText : "#868e96",
                        }}
                      >
                        {project.description}
                      </p>
                      <span
                        className="project-card-link"
                        style={{ color: theme ? theme.text : "#000" }}
                      >
                        Visit Site →
                      </span>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
