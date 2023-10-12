import image from "@/public/images/lib1.webp";
import { Container } from "../../common/Container";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "All the Study Friendly Cafes in Strathfield",
    description:
      "Strathfield has soooo many great spots and hidden study cafes",
    link: "slug",
    image: image,
  },
  {
    title: "All the Study Friendly Cafes in Strathfield",
    description:
      "Strathfield has soooo many great spots and hidden study cafes",
    link: "slug",
    image: image,
  },
  {
    title: "All the Study Friendly Cafes in Strathfield",
    description:
      "Strathfield has soooo many great spots and hidden study cafes",
    link: "slug",
    image: image,
  },
];

export default function TwoColumnImagewithBorder({ library }: any) {
  console.log(library.data[0].attributes.library_image);
  return (
    <Container>
      <div className="space-y-10">
        {library.data.map((item: any) => {
          return (
            <div key={item.id} className="flex border rounded-3xl ">
              <div>
                <Image
                  src={item.attributes.library_image.data.attributes.url}
                  alt={
                    item.attributes.library_image.data.attributes
                      .alternativeText || item.attributes.title
                  }
                  width={500}
                  height={350}
                  className="rounded-tl-3xl rounded-bl-3xl"
                />
              </div>
              <div className="flex-1 m-10">
                <h2 className="font-medium text-3xl">
                  {item.attributes.title}
                </h2>
                <p className="text-base mt-5">
                  {item.attributes.short_description}
                </p>
                <div className="flex justify-end mt-5">
                  <Link
                    href={`/library/${item.attributes.slug}`}
                    className="text-sm font-bold"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
