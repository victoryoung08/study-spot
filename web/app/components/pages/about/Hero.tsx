import Image from "next/image";

import AboutImg from "@/public/images/about-hero.webp";
import { Container } from "../../common/Container";

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-sm mb-3">About Us</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl ">
            Hey! We&apos;re Study Spot
          </h2>
        </div>
        <div>
          <Image src={AboutImg} alt="About Image" className="rounded-2xl" />
        </div>
      </div>
    </Container>
  );
}
