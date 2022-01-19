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
              "SWEB". Coming from a large family, we didn't always have enough
              money. At the time, there was not always money for the well-known
              soft drink brands to provide the whole family with this on a daily
              basis. On occasions, such as a birthday, soft drinks were present,
              but not in great numbers. Nothing was drunk as much and was as
              tasty as a "home made" ice cold glass of SWEB. It didn't matter,
              everyone was welcome and everyone drank SWEB. Friends,
              acquaintances and relatives visited regularly. Even if it was just
              to enjoy a delicious ice-cold glass of SWEB.
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
