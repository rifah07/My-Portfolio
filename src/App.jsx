import LogoSection from "./sections/LogoSection";
import Navbar from "./components/Navbar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import { ShowcaseSection } from "./sections/ShowcaseSection";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoSection /> */}
      <FeatureCards />
      <Experience />
    </>
  );
};

export default App;