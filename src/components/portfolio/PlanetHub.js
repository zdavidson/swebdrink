import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PlanetHub = () => {
  return (
    <div id="about" className="about-me">
      <Row>
        <Col className="mobile">
          <a className="image-link" href="https://planet-hub.vercel.app">
            <img
              id="planet-hub-image"
              className="about-image"
              src="./planet-hub-screenshot-mobile-third.png"
              alt="profile"
            />
          </a>
        </Col>
        <Col className="text-column">
          <Row>
            <div className="line"></div>
          </Row>

          <Row>
            <h2>PlanetHub</h2>
          </Row>
          <Row>
            <p className="portfolio-item-description">
              This is a fully responsive info site that I built using React. In
              addition to React, I used React Bootrap for simplified component
              creation, and SCSS for greater code structure.
            </p>
            <br className="desktop"></br>
            <p className="desktop">
              GitHub:{" "}
              <span>
                <a
                  className="github-link"
                  href="https://github.com/zdavidson/planet-hub"
                >
                  https://github.com/zdavidson/planet-hub
                </a>
              </span>
            </p>
          </Row>
          <Row>
            <Button
              variant="outline-secondary"
              href="https://planet-hub.vercel.app"
            >
              View Project
            </Button>
          </Row>
          <Row>
            <div className="line end"></div>
          </Row>
        </Col>
        <Col className="desktop">
          <a className="image-link" href="https://planet-hub.vercel.app">
            <img
              id="planet-hub-image"
              className="about-image"
              src="./planet-hub-screenshot-mobile-third.png"
              alt="profile"
            />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default PlanetHub;
