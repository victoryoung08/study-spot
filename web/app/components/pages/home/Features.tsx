import image3 from "@/public/images/study treats.png";
import image1 from "@/public/images/study-friendly-cafe.png";
import image2 from "@/public/images/study-vibe.png";
import { Container } from "../../common/Container";
import Image from "next/image";

const aboutData = [
  {
    id: 1,
    image: image1,
    title: "Study-friendly Cafes",
    description: "All the listed cafes are cool with you studying there",
  },
  {
    id: 2,
    image: image2,
    title: "Study Vibe",
    description:
      "Studying and being productive needs the right vibe. We'll find the best spots.",
  },
  {
    id: 3,
    image: image3,
    title: "Study Treats",
    description:
      "Our Study Spots would love to have you! They'll often run discounts, promos and maybe freebies!",
  },
];

export default function Features({ item }: any) {
  return (
    <Container>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
        {item?.map((feature: any) => {
          return (
            <div key={item.id} className="text-center">
              <Image
                src={feature.image?.data?.attributes?.url}
                alt={feature.title}
                className="mx-auto"
                width={200}
                height={200}
              />
              <p className="mt-2 font-bold lg:text-2xl">
                {feature.title || ""}
              </p>
              <p className="mt-5 text-base">{feature.description || ""}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
