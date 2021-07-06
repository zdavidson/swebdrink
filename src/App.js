import "./App.scss";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation";
import Hero from "./components/homepage/Hero";
import AboutMe from "./components/homepage/AboutMe";
import ContactMe from "./components/homepage/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container>
        <header>
          <Navigation />
        </header>
        <main>
          <Hero />
          <AboutMe />
          <ContactMe />
        </main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
