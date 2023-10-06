import Image from "next/image";
import { Container } from "../../common/Container";
import image from "@/public/images/image.webp";

const list = [
  { id: 1, title: "You love creating stuff" },
  { id: 2, title: "You're not afraid to experiment" },
  {
    id: 3,
    title:
      "You have an itch to understand why things work and why things don't",
  },
  { id: 4, title: "You love cafe culture, lofi and aesthetics" },
];

export default function AboutYou() {
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
          <h3 className="text-2xl mb-5 lg:text-3xl font-semibold">About you</h3>
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
