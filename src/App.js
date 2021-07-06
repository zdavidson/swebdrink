import "./App.scss";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <Container>
      <header>
        <Navigation />
      </header>
      <body>
        <Hero />
        <AboutMe />
        <ContactMe />
      </body>
      <footer>{/* <Footer /> */}</footer>
    </Container>
  );
}

export default App;
