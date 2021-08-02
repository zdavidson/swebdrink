import "./PortfolioIndex.scss";
import ContactMe from "../homepage/ContactMe";
import Audiophile from "./Audiophile";
import PlanetHub from "./PlanetHub";

const PortfolioIndex = () => {
  return (
    <div id="portfolio-index">
      <Audiophile />
      <PlanetHub />
      <ContactMe />
    </div>
  );
};

export default PortfolioIndex;
