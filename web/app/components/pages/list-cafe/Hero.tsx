import heroBg from "@/public/images/dark-bg.png";
import { Container } from "../../common/Container";

export default function Hero() {
  return (
    <Container backgroundImage={heroBg.src}>
      <div className="bg-gradient-to-t  from-[#181818] absolute top-0 right-0 bottom-0 left-0 z-10"></div>

      <div className="lg:py-20 z-50 text-center relative">
        <h2 className="text-4xl font-bold leading-snug text-white md:text-5xl lg:text-6xl lg:w-3/4 mx-auto">
          Fill your cafe with more foot traffic
        </h2>
        <p className="my-5 text-base text-white lg:text-xl">
          Connect with students, remote workers and digital nomads.
        </p>
        <p className="text-base text-white lg:text-xl">
          Meaning more coffee and food orders (and a greater word of mouth
          presence!)
        </p>
        <button
          type="button"
          className="mt-5 btn btn-primary rounded-xl border border-white py-2 text-base capitalize"
        >
          Become an Early Study Spot
        </button>
      </div>
    </Container>
  );
}
