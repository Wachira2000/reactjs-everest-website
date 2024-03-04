import ContactMe from "../ContactMe";
import AboutEverest from "../AboutEverest";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import Clients from "../Clients";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Clients />
      <MySkills />
      <AboutEverest />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}
