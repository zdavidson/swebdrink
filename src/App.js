import "./App.scss";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Container>
      <header>
        <Navigation />
      </header>
      <body>Hey Now</body>
      <footer>{/* <Footer /> */}</footer>
    </Container>
  );
}

export default App;
