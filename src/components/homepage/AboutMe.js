import "./AboutMe.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <Row>
        <Col id="about-image-col" className="">
          <img className="about-image" src="./profile.jpg" alt="profile" />
        </Col>
        <Col className="text-column">
          {/* <Row>
            <div className="line"></div>
          </Row> */}

          <Row>
            <h2>History</h2>
          </Row>
          <Row>
            <p>
              Sidney William Eduard Bakboord or SWEB is the founder of this
              delicious soft drink. It was produced at home according to our own
              recipe and every sip is a delight. A beautiful reminder of his
              recipe to this day. As a large family we were not well off. In
              addition to his great cooking skills, he not only provided the
              family with deliciously prepared meals, but also with delicious
              "SWEB". On occasions, for example a birthday, several soft drinks
              were provided, but not in great numbers. Nothing was drunk as much
              and was as tasty as a "home made" ice cold glass of SWEB. It
              didn't matter who, everyone was welcome and everyone drank SWEB.
              Friends, acquaintances and relatives visited regularly. If only to
              enjoy a delicious ice-cold glass of SWEB.
            </p>
          </Row>
          <Row>
            <Button variant="outline-secondary" href="/products">
              Products
            </Button>
          </Row>
          {/* <Row>
            <div className="line end"></div>
          </Row> */}
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
