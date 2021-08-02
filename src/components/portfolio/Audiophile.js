import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Audiophile = () => {
  return (
    <div id="about" className="about-me">
      <Row>
        <Col id="about-image-col" className="">
          <a className="image-link" href="https://audiophile-seven.vercel.app">
            <img
              id="audiophile-image"
              className="about-image"
              src="./audiophile-screenshot-half.png"
              alt="profile"
            />
          </a>
        </Col>
        <Col className="text-column">
          <Row>
            <div className="line"></div>
          </Row>

          <Row>
            <h2>Audiophile</h2>
          </Row>
          <Row>
            <p className="portfolio-item-description">
              This is a fully responsive e-commerce site that I built using
              React and Redux. Additionally, I made use of React Bootrap, and
              SCSS for more efficient component creation and cleaner code.
            </p>
            <br className="desktop"></br>
            <p className="desktop">
              GitHub:{" "}
              <span>
                <a
                  className="github-link"
                  href="https://github.com/zdavidson/audiophile"
                >
                  https://github.com/zdavidson/audiophile
                </a>
              </span>
            </p>
          </Row>
          <Row>
            <Button
              variant="outline-secondary"
              href="https://audiophile-seven.vercel.app"
            >
              View Project
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

export default Audiophile;
