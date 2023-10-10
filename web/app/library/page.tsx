import { Container } from "../components/common/Container";
import * as component from "../components/common/ComponentSelector";
import TwoColumnImagewithBorder from "../components/pages/library/twoColumnImageWithBorder";

export default async function library() {
  return (
    <Container>
      <div className="text-center mb-10">
        <h2 className="font-bold text-4xl lg:text-5xl">
          Explore the Cafe Library
        </h2>
      </div>
      <TwoColumnImagewithBorder />
    </Container>
  );
}
