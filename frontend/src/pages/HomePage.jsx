import Hero from "../components/home/Hero";
import Awards from "../components/home/Awards";
import Stats from "../components/home/Stats";
import Pricing from "../components/home/Pricing";
import Education from "../components/home/Education";
import OpenAccount from "../components/common/OpenAccount";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Awards />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
};

export default HomePage;
