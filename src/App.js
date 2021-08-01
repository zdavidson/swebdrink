import "./App.scss";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation";
import HomeIndex from "./components/homepage/HomeIndex";
import Footer from "./components/Footer";
import PortfolioIndex from "./components/portfolio/PortfolioIndex";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container>
        <header>
          <Navigation />
        </header>
        <main>
          <Route exact path="/" component={HomeIndex} />
          <Route path="/portfolio" component={PortfolioIndex} />
        </main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
