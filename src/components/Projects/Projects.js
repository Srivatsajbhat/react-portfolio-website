import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import card from "../../Assets/Projects/card.png";
import wordpress from "../../Assets/Projects/wordpress.png";
import figma from "../../Assets/Projects/repecit.png";
import react from "../../Assets/Projects/react.png";
import calci from "../../Assets/Projects/calci.png";
import html from "../../Assets/Projects/html.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="Portfolio Website (React.js)"
              description="This project serves as a testament to my passion for web development and my dedication to creating engaging and intuitive user experiences. Through the implementation of React.js, I have harnessed the capabilities of this popular JavaScript library to bring my portfolio to life, enabling seamless navigation, interactive components, and a visually captivating design."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={html}
              isBlog={false}
              title="Portfolio Website (HTML, CSS & JS)"
              description="This project embodies my commitment to creating visually stunning and user-friendly experiences. By leveraging the power of HTML for structure, CSS for styling, and JavaScript for interactivity, I have curated a captivating platform to showcase my skills, accomplishments, and creative projects."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={figma}
              isBlog={false}
              title="Figma Design for RepecIt"
              description="Designed a Figma prototype for RepecIt. Figma, a powerful design tool, offers us a versatile canvas to bring our design ideas to life, enabling seamless collaboration, interactive components, and efficient iteration. By harnessing the capabilities of Figma, we can ensure that our design for RepecIt embodies the company's innovative spirit, fosters engaging user experiences, and effectively communicates its brand identity. "
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card}
              isBlog={false}
              title="Profile Card (HTML & CSS)"
              description="In this project, I embark on a creative journey to design an appealing and stylish profile card using the fundamentals of HTML and CSS. The profile card serves as a visual representation of an individual or brand, offering a concise snapshot of key information and a touch of personal flair. By leveraging HTML's structural elements and CSS's styling capabilities, I have constructed a captivating profile card that showcases the essence of the subject in an aesthetically pleasing manner."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calci}
              isBlog={false}
              title="Calculator with Glassmorphism effect"
              description="In this project, I embark on an exciting journey to create a sleek and modern calculator with a captivating glassmorphism effect using HTML, CSS, and JavaScript. The glassmorphism trend, characterized by translucent and frosted glass-like elements, adds a touch of elegance and sophistication to our calculator design."
      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordpress}
              isBlog={false}
              title="Website using Wordpress"
              description="In this project, I embark on a journey to build a dynamic and professional website using the versatile and user-friendly WordPress platform. WordPress, a powerful content management system (CMS), empowers us to create and customize websites with ease, offering a wide range of themes, plugins, and customization options."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
