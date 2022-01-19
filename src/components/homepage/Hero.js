import "./Hero.scss";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text-container">
        <h1>SwebDrink</h1>
        <h2>There's always room for memories!</h2>
        <Button id="about-me-button" variant="success" href="#about">
          History
        </Button>
      </div>
      <div className="section-seperator">
        <hr className="line"></hr>
      </div>
    </div>
  );
};

export default Hero;
