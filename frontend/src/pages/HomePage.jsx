import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Awards from "../components/home/Awards";
import Stats from "../components/home/Stats";
import Pricing from "../components/home/Pricing";
import Education from "../components/home/Education";
import OpenAccount from "../components/common/OpenAccount";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      
      <Stats />
      <Awards />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
};

export default HomePage;
