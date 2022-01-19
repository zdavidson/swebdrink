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
              src="./third-item.jpeg"
              alt="profile"
            />
          </a>
        </Col>
        <Col className="text-column">
          <Row>
            <div className="line"></div>
          </Row>

          <Row>
            <h2>FunkyPunch</h2>
          </Row>
          <Row>
            <p className="portfolio-item-description">
              A delicious mix of strawberry and cherry flavors.
            </p>
          </Row>
          <Button variant="outline-secondary" href="mailto:info@swebdrink.nl">
            Order Now
          </Button>
          <Row>
            <div className="line end"></div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Audiophile;
