import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <>
      <div id="contact-page" className="contact-me">
        <div className="section-seperator">
          <hr className="line"></hr>
        </div>
        <h2>Contact Us to Order your SwebDrink today!</h2>
        <div className="line-contact">
          <hr></hr>
        </div>
        <Button variant="outline-secondary" href="mailto:info@swebdrink.nl">
          Contact
        </Button>
      </div>
    </>
  );
};

export default Contact;
