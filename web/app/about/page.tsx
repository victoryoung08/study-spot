import { Container } from "../components/common/Container";
import AboutUs from "../components/pages/about/About";
import Cta from "../components/pages/about/Cta";
import Goal from "../components/pages/about/Goal";
import Hero from "../components/pages/about/Hero";

const About = () => {
  return (
    <Container>
      <Hero />
      <AboutUs />
      <Goal />
      <Cta />
    </Container>
  );
};

export default About;
