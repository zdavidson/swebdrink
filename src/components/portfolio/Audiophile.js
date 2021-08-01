import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Audiophile = () => {
  return (
    <div id="about" className="about-me">
      <Row>
        <Col id="about-image-col" className="">
          <img
            className="about-image"
            src="./audiophile-screenshot-half.png"
            alt="profile"
          />
        </Col>
        <Col className="text-column">
          <Row>
            <div className="line"></div>
          </Row>

          <Row>
            <h2>Audiophile</h2>
          </Row>
          <Row>
            <p>
              This is a fully responsive e-commerce site that I built using
              React and Redux. Additionally, I made use of React Bootrap, and
              SCSS for more efficient component creation and cleaner code.
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
