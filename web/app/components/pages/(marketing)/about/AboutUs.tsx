import { Container } from "../../../common/Container";

type AboutUsType = {
  title: string;
  description: string;
};

export default function AboutUs({ title, description }: AboutUsType) {
  return (
    <Container>
      <div className="text-center lg:py-20">
        <h2 className="text-4xl font-bold lg:text-5xl">{title || ""}</h2>
        <p className="text-base lg:text-lg mt-5 lg:w-3/4 mx-auto">
          {description || ""}
        </p>
      </div>
    </Container>
  );
}
