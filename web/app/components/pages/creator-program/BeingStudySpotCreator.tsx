import Image from "next/image";
import { Container } from "../../common/Container";
import image from "@/public/images/study-spot-creator.webp";

const list = [
  { id: 1, title: "Create short-form content for TikTok, Reels and Shorts" },
  { id: 2, title: "Review cafes and how study-friendly they are" },
  {
    id: 3,
    title: "Chat and build relationships with cafe owners/managers",
  },
  { id: 4, title: "Travel across Sydney to find the best study spots" },
  { id: 5, title: "Curate and research hidden cafes well suited for studying" },
];

export default function BeingStudySpotCreator() {
  return (
    <Container>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Image
            src={image}
            alt="Image"
            height={300}
            className="mx-auto rounded-xl"
          />
        </div>
        <div>
          <h3 className="text-2xl mb-5 lg:text-3xl font-semibold">
            Being a Study Spot Creator
          </h3>
          <ul className="space-y-3">
            {list.map((item) => {
              return (
                <li key={item.id} className="list-disc list-inside text-sm">
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
}
