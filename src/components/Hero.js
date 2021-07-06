import "./Hero.scss";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <div className="hero d-flex my-4">
      <div className="text-container pt-5 pr-5">
        <h1 className="pb-5 pr-2">
          Hey, I'm Zoë Davidson and I love building beautiful websites
        </h1>
        <Button variant="success">About Me</Button>
      </div>
    </div>
  );
};

export default Hero;
