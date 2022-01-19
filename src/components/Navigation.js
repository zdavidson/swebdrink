import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <NavBar className="navigation">
      <NavBar.Brand href="/">
        <img src="./logo.png" alt="site-logo" />
      </NavBar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="mr-4 header-link" href="/">
          Home
        </Nav.Link>
        <Nav.Link className="mr-4 header-link" href="/products">
          Products
        </Nav.Link>
        <Nav.Link className="header-link" href="/contact">
          Contact
        </Nav.Link>
      </Nav>
    </NavBar>
  );
};

export default Navigation;
