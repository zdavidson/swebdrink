import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <NavBar id="footer-nav" className="">
          <NavBar.Brand href="#home">
            <img className="footer-link" src="./logo.png" alt="site-logo" />
          </NavBar.Brand>
          <Nav className="footer-link-container">
            <Nav.Link className="footer-link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="footer-link" href="/products">
              Products
            </Nav.Link>
            <Nav.Link className="footer-link" href="mailto:info@swebdrink.nl">
              Contact
            </Nav.Link>
          </Nav>
          <p className="footer-text">
            Vederhaven 7<br></br> 2993 EB Barendrecht
          </p>
          <p id="copy-right" className="footer-text">
            © 2022 SwebDrink <br></br> Chamber of Commerce: 82450641
          </p>

          <Nav className="footer-icons-container">
            <Nav.Link
              className="footer-link footer-icons"
              href="https://www.facebook.com/Swebdrink-105403548670213/?view_public_for=105403548670213"
            >
              <img src="./facebook-logo.png" alt="github-icon" />
            </Nav.Link>
            {/* <Nav.Link className="mr-2 footer-link" href="#portfolio">
            <img src="./twitter.svg" alt="twitter-icon" />
          </Nav.Link> --- maybe Vimeo?*/}
            <Nav.Link
              className="footer-link"
              href="https://www.instagram.com/swebdrink/"
            >
              <img src="./instagram.png" alt="linkedin-icon" />
            </Nav.Link>
          </Nav>
        </NavBar>
      </Container>
    </div>
  );
};

export default Footer;
