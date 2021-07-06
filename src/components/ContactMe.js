import "./ContactMe.scss";
import Button from "react-bootstrap/Button";

const ContactMe = () => {
  return (
    <div className="contact-me my-5 py-5 d-flex align-items-center">
      <h2>Interested in doing a project together?</h2>
      <div className="line-contact px-4 mx-4">
        <hr></hr>
      </div>
      <Button variant="outline-secondary">Contact Me</Button>
    </div>
  );
};

export default ContactMe;
