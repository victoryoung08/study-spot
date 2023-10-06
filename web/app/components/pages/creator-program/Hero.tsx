import { Container } from "../../common/Container";

export default function Hero() {
  return (
    <Container>
      <div className="lg:py-20 text-center">
        <h2 className="text-5xl font-semibold lg:text-6xl">
          Chill, create and cafe hop
        </h2>
        <p className="text-base lg:text-lg lg:w-3/4 mx-auto my-7">
          We&apos;re looking for creators who love cafes and study tok
        </p>
        <button
          type="button"
          className="btn btn-primary rounded-xl border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
        >
          Become a Creator
        </button>
      </div>
    </Container>
  );
}
