import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <NavBar className="py-4" bg="light">
      <NavBar.Brand href="#home">
        <img src="./logo.svg" alt="site-logo" />
      </NavBar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="mr-4" href="#home">
          Home
        </Nav.Link>
        <Nav.Link className="mr-4" href="#portfolio">
          Portfolio
        </Nav.Link>
        <Nav.Link href="#contact">Contact Me</Nav.Link>
      </Nav>
    </NavBar>
  );
};

export default Navigation;
