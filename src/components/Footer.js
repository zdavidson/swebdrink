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
            <img
              className="footer-link"
              src="./logo-light.svg"
              alt="site-logo"
            />
          </NavBar.Brand>
          <Nav className="footer-link-container">
            <Nav.Link className="footer-link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link
              className="footer-link"
              href="https://github.com/zdavidson"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              className="footer-link"
              href="mailto:zoe.a.h.davidson@gmail.com"
            >
              Contact Me
            </Nav.Link>
          </Nav>

          <Nav className="footer-icons-container">
            <Nav.Link
              className="footer-link footer-icons"
              href="https://github.com/zdavidson"
            >
              <img src="./github.svg" alt="github-icon" />
            </Nav.Link>
            {/* <Nav.Link className="mr-2 footer-link" href="#portfolio">
            <img src="./twitter.svg" alt="twitter-icon" />
          </Nav.Link> --- maybe Vimeo?*/}
            <Nav.Link
              className="footer-link"
              href="https://www.linkedin.com/in/zo%C3%ABdavidson/"
            >
              <img src="./linkedin.svg" alt="linkedin-icon" />
            </Nav.Link>
          </Nav>
        </NavBar>
      </Container>
    </div>
  );
};

export default Footer;
