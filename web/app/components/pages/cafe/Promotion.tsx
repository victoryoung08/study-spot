import { Container } from "../../common/Container";

export default function Promotion() {
  return (
    <Container>
      <div className="text-center">
        <h2 className="font-semibold text-4xl lg:text-5xl">Promotion</h2>
        <p className="mt-2 text-base ">
          Simple share a story or post and tag us!
        </p>
        <button
          type="button"
          className="mt-5 btn bg-primary font-normal hover:bg-primary rounded-xl text-white border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
        >
          Unlock now
        </button>
      </div>
    </Container>
  );
}
