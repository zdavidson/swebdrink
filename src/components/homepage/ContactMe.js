import "./ContactMe.scss";
import Button from "react-bootstrap/Button";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="section-seperator">
        <hr className="line"></hr>
      </div>
      <h2>Order your SwebDrink today!</h2>
      <div className="line-contact">
        <hr></hr>
      </div>
      <Button variant="outline-secondary" href="mailto:info@swebdrink.nl">
        Contact
      </Button>
    </div>
  );
};

export default ContactMe;
