import Image from "next/image";
import { Container } from "./components/common/Container";
import Hero from "./components/pages/home/Hero";
import About from "./components/pages/home/About";
import Cta from "./components/pages/home/Cta";
import ExploreLibrary from "./components/pages/home/ExploreLibrary";

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Cta />
      <ExploreLibrary />
    </Container>
  );
}
