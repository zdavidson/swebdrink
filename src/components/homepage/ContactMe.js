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
      <div id="contact-button">
        <Button variant="outline-secondary" href="mailto:info@swebdrink.nl">
          Email
        </Button>
        <Button
          variant="outline-secondary"
          href="//api.whatsapp.com/send?phone=310643407491"
          target="_blank"
        >
          WhatsApp <img src="./whatsapp-green.png" alt="twitter-icon" />
        </Button>
      </div>
    </div>
  );
};

export default ContactMe;
