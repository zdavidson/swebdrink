import "./Hero.scss";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <div className="hero d-flex my-4">
      <div className="text-container pt-5 pr-5">
        <h2 className="pb-5">
          Hey, I'm Alex Spencer and I love building beautiful websites
        </h2>
        <Button variant="success">About Me</Button>
      </div>
    </div>
  );
};

export default Hero;
