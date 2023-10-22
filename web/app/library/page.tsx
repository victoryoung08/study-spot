import { Metadata } from "next";
import { Container } from "../components/common/Container";
import TwoColumnImagewithBorder from "../components/pages/library/twoColumnImageWithBorder";

export const metadata: Metadata = {
  title: "Library",
  description: "Study Spot - Find the Best Study Spot",
};


export default async function library() {
  const response = await fetch(
    `${process.env.STRAPI_API_ENDPOINT}/libraries?populate=deep`,
    {
      next: { revalidate: 1 },
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return (
    <Container>
      <div className="text-center mb-10">
        <h2 className="font-bold text-4xl lg:text-5xl">
          Explore the Cafe Library
        </h2>
      </div>
      <TwoColumnImagewithBorder library={data} />
    </Container>
  );
}
