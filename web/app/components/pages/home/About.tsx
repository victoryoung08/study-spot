import Image from "next/image";

import sectionImage from "@/public/images/feature-image.png";
import image3 from "@/public/images/study treats.png";
import image1 from "@/public/images/study-friendly-cafe.png";
import image2 from "@/public/images/study-vibe.png";
import { Container } from "../../common/Container";

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

export default function About() {
  return (
    <Container>
      <div className="lg:my-20 flex flex-col items-center justify-center gap-20 lg:gap-44">
        <div className="space-y-5 text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">
            &quot;Study spots with Wi-Fi and charging&quot;
          </h2>
          <p className="text-base lg:text-lg">oh and maybe with lo-fi too?</p>
          <div className="relative">
            <Image
              src={sectionImage}
              alt="section Image"
              className="mx-auto mt-10 rounded-2xl"
              width={500}
            />
            <div className="bg-gradient-to-t from-[#181818] h-56 w-full right-0 left-0 bottom-0 absolute "></div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {aboutData.map((item) => {
            return (
              <div key={item.id} className="text-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="mx-auto"
                  width={200}
                  height={200}
                />
                <p className="font-bold lg:text-2xl">{item.title}</p>
                <p className="mt-5 text-base">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
