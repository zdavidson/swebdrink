import "./AboutMe.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AboutMe = () => {
  return (
    <div className="about-me my-4 py-5 d-flex">
      <Row>
        <Col className="pr-5">
          <img
            className="about-image"
            src="./image-homepage-profile.jpg"
            alt="profile"
          />
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
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in London, UK, but I’m happy working
              remotely and have experience in remote teams. When I’m not coding,
              you’ll find me outdoors. I love being out in nature whether that’s
              going for a walk, run or cycling. I’d love you to check out my
              work.
            </p>
          </Row>
          <Row>
            <Button variant="outline-secondary">Go To Portfolio</Button>
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
