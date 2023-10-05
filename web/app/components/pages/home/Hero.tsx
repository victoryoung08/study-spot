import Image from "next/image";
import { Container } from "../../common/Container";
import heroImg from "@/public/images/hero-image.webp";
export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-center gap-10 text-center lg:text-left">
        <div>
          <h1 className="text-4xl capitalize font-bold leading-snug text-white md:text-5xl lg:text-6xl">
            Find the best study cafe
          </h1>
          <p className="w-3/4 mx-auto lg:w-auto my-5 lg:my-10 text-base text-white lg:text-xl">
            We help you find study-friendly cafes with Wi-Fi and PowerPoints all
            with the right vibe and music
          </p>
          <button
            type="button"
            className="btn btn-primary rounded-xl border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
          >
            Find a Study Spot
          </button>
        </div>
        <div className="relative">
          <Image
            loading="eager"
            src={heroImg}
            alt="Hero image"
            className="rounded-2xl w-3/4 lg:h-full mx-auto lg:mx-0"
          />
          <div className=" bg-gradient-to-t lg:bg-gradient-to-l from-[#181818] h-56 w-full lg:w-44 absolute bottom-0 rounded-bl-2xl rounded-br-2xl lg:rounded-tr-2xl lg:rounded-br-2xl"></div>
        </div>
      </div>
    </Container>
  );
}
