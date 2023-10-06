import { Container } from "../../common/Container";

export default function Cta() {
  return (
    <Container>
      <div className="lg:py-20 text-center">
        <h2 className="text-4xl font-semibold lg:text-5xl">
          Become a Study Spot
        </h2>
        <p className="text-base lg:text-lg lg:w-3/4 mx-auto my-7">
          Join our community, get listed on our app and connect with students &
          remote workers. Our goal is to help you grow (this of course helps us
          grow too!)
        </p>
        <button
          type="button"
          className="btn btn-primary rounded-xl border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
        >
          List your cafe
        </button>
      </div>
    </Container>
  );
}
