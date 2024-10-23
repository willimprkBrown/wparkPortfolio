import { useState } from "react";
import { Container, Row, Col, Button, Collapse } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {
  const [open, setOpen] = useState(false);

  const projects = [
  {
    title: "Business Startup 1",
    description: "Design & Development",
    imgUrl: projImg1, // Placeholder image URL
    githubUrl: "https://github.com/dummyrepo1", // Dummy GitHub URL
    technologies: ["React", "Bootstrap", "Node.js"], // Dummy tech stack
  },
  {
    title: "Business Startup 2",
    description: "Design & Development",
    imgUrl: projImg1, // Placeholder image URL
    githubUrl: "https://github.com/dummyrepo2", // Dummy GitHub URL
    technologies: ["Vue", "Vuetify", "Firebase"], // Dummy tech stack
  },
  {
    title: "Business Startup 3",
    description: "Design & Development",
    imgUrl: projImg1, // Placeholder image URL
    githubUrl: "https://github.com/dummyrepo3", // Dummy GitHub URL
    technologies: ["Angular", "TypeScript", "Express"], // Dummy tech stack
  },
  {
    title: "Business Startup 4",
    description: "Design & Development",
    imgUrl: projImg1, // Placeholder image URL
    githubUrl: "https://github.com/dummyrepo4", // Dummy GitHub URL
    technologies: ["Python", "Flask", "PostgreSQL"], // Dummy tech stack
  },
];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div className="">
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                
                {/* Display first set of ProjectCards */}
                <Row>
                  {
                    projects.slice(0, 2).map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))
                  }
                </Row>

                {/* Collapsible section for additional ProjectCards */}
                <Collapse in={open}>
                  <div>
                    <Row>
                      {
                        projects.slice(2).map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))
                      }
                    </Row>
                  </div>
                </Collapse>

                {/* Show More/Show Less button */}
                <div className="text-center mt-3">
                  <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-project-cards"
                    aria-expanded={open}
                  >
                    {open ? "Show Less" : "Show More"}
                  </Button>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}