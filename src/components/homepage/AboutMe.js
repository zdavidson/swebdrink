import "./AboutMe.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AboutMe = () => {
  return (
    <div className="about-me my-4 py-5 d-flex">
      <Row>
        <Col className="pr-5">
          <img className="about-image" src="./profile.jpg" alt="profile" />
        </Col>
        <Col className="text-column px-5 mx-5 d-flex flex-column justify-content-between">
          <Row>
            <div className="line"></div>
          </Row>

          <Row>
            <h2>About Me</h2>
          </Row>
          <Row>
            <p>
              I’m a software engineer looking for a role at a company that's
              looking to make a positive difference in the world. I focus on
              writing accessible HTML, using modern CSS practices and writing
              clean JavaScript. When it comes to front end technologies, I'm
              well versed in React, but I can adapt to whatever tools are
              required. As far as the back end goes, I have experience with
              Node.js, Express, and PostgreSQL. I’m currently based in Toronto,
              ON, but I’m happiest working remotely and have experience in
              remote teams. When I’m not coding, you’ll find me taking photos
              and travelling. I love art in all its forms, but particularly in
              print or on film. I’d love for you to check out my work.
            </p>
          </Row>
          <Row>
            <Button
              variant="outline-secondary"
              href="https://github.com/zdavidson"
            >
              Go To Portfolio
            </Button>
          </Row>
          <Row>
            <div className="line end"></div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
