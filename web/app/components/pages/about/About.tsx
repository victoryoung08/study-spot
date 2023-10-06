import { Container } from "../../common/Container";

export default function AboutUs() {
  return (
    <Container>
      <div className="text-center lg:py-20">
        <h2 className="text-4xl font-bold lg:text-5xl">
          We&apos;re an app to connect you with more foot traffic
        </h2>
        <p className="text-base lg:text-lg my-7 lg:w-3/4 mx-auto">
          Students, digital nomads and remote workers are looking for cafes like
          yours. A place to feel inspired, to feel productive and to feel
          refreshed.
        </p>
        <p className="text-base lg:text-lg">
          They&apos;re looking for study cafes near them, and that&apos;s
          exactly what we do for you.
        </p>
      </div>
    </Container>
  );
}
