import "./App.scss";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation";
import HomeIndex from "./components/homepage/HomeIndex";
import Footer from "./components/Footer";
import ProductIndex from "./components/products/ProductIndex";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <Container>
        <header>
          <Navigation />
        </header>
        <main>
          <Route exact path="/" component={HomeIndex} />
          <Route path="/products" component={ProductIndex} />
          <Route path="/contact" component={Contact} />
        </main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
