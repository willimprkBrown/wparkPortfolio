import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, technologies }) => {
  return (
    <Col size={12} sm={10} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        {/* Technology tags */}
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-tag">
              {tech}
            </div>
          ))}
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          {/* GitHub button */}
          <Button variant="primary" href={githubUrl} target="_blank" className="mt-3">
            View on GitHub
          </Button>
        </div>
      </div>
    </Col>
  );
};
