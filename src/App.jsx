import LogoSection from "./sections/LogoSection";
import Navbar from "./components/Navbar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import { ShowcaseSection } from "./sections/ShowcaseSection";
import ExperienceSections from "./sections/ExperienceSections";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoSection /> */}
      <FeatureCards />
      <ExperienceSections />
    </>
  );
};

export default App;