import cafe1 from "@/public/images/cherubcafe.webp";
import cafe2 from "@/public/images/lovebeanscafe.webp";
import cafe3 from "@/public/images/icklecafe.webp";
import cafe4 from "@/public/images/parkcafe.webp";
import cafe5 from "@/public/images/maystorycafe.webp";
import cafe6 from "@/public/images/augustcafe.webp";
import cafe7 from "@/public/images/bankercafe.webp";
import cafe8 from "@/public/images/puqdcafe.webp";
import wifi from "@/public/images/wifi.svg";
import charging from "@/public/images/charging.svg";
import chill from "@/public/images/chill.svg";
import cozy from "@/public/images/cozy.svg";
import fast from "@/public/images/fast.svg";
import upbeat from "@/public/images/upbeat.svg";
import minimal from "@/public/images/minimal.svg";
import earthy from "@/public/images/earthy.svg";
import vintage from "@/public/images/vintage.svg";
import artistic from "@/public/images/artistic.svg";
import Image from "next/image";
import Link from "next/link";

const cafes = [
  {
    id: 1,
    slug: "cherub-specialty-coffee",
    cafeName: "Cherub Specialty Coffee",
    location: "Hurtsville",
    image: cafe1,
    tags: ["wifi", "charging", "chill", "minimal"],
  },
  {
    id: 2,
    slug: "love-of-beans",
    cafeName: "Love of Beans",
    location: "Carlton",
    image: cafe2,
    tags: ["wifi", "charging", "chill", "cozy"],
  },
  {
    id: 3,
    slug: "ickle-coffee",
    cafeName: "Ickle Coffee",
    location: "Kingsgrove",
    image: cafe3,
    tags: ["charging", "chill", "artistic"],
  },
  {
    id: 4,
    slug: "park-cafe",
    cafeName: "Park Cafe",
    location: "Campsie",
    image: cafe4,
    tags: ["wifi", "charging", "chill", "minimal", "earthy", "artistic"],
  },
  {
    id: 5,
    slug: "may-story-cafe",
    cafeName: "May Story Cafe",
    location: "Lidcombe",
    image: cafe5,
    tags: ["wifi", "charging", "chill", "cozy", "vintage"],
  },
  {
    id: 6,
    slug: "august-coffee",
    cafeName: "August Coffee",
    location: "North Strathfield",
    image: cafe6,
    tags: ["wifi", "charging", "chill", "fast", "minimal"],
  },
  {
    id: 7,
    slug: "bunder-64",
    cafeName: "Bunker 64",
    location: "Lidcombe",
    image: cafe7,
    tags: ["chill", "charging", "minimal", "earthy"],
  },
  {
    id: 8,
    slug: "puqd-espresso",
    cafeName: "PUQD Espresso",
    location: "Rhodes",
    image: cafe8,
    tags: ["wifi", "charging", "chill", "upbeat", "minimal"],
  },
];

const tags = [
  { id: 1, title: "wifi", image: wifi },
  { id: 2, title: "charging", image: charging },
  { id: 3, title: "chill", image: chill },
  { id: 4, title: "cozy", image: cozy },
  { id: 5, title: "fast", image: fast },
  { id: 6, title: "upbeat", image: upbeat },
  { id: 7, title: "minimal", image: minimal },
  { id: 8, title: "earthy", image: earthy },
  { id: 9, title: "vintage", image: vintage },
  { id: 10, title: "artistic", image: artistic },
];

export default function Cafe({ cafe }) {
  // console.log(cafe);
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cafe.map((item: any) => {
          return (
            <Link
              href={`/cafes/${item.attributes.slug}`}
              key={item.id}
              className="rounded-3xl border border-white overflow-hidden hover:bg-primary transition-all ease-in-out delay-100 duration-500"
            >
              <Image
                src={item.attributes.images.data[0].attributes.url || ""}
                alt={item.cafe_name}
                width={400}
                height={400}
                className="w-full h-[400px]"
              />
              <div className="p-5">
                <h2 className="font-semibold text-xl">
                  {item.attributes.cafe_name}
                </h2>
                <p className="text-sm mb-2">{item.attributes.suburb}</p>
                <div className="flex gap-2">
                  {/* {item.tags.map((item, indx) => {
                    return (
                      <div
                        key={indx + 1}
                        className="border p-1 rounded-xl bg-primary"
                      >
                        {tags.map((tag) => {
                          return (
                            <div key={tag.id}>
                              {item === tag.title && (
                                <div>
                                  <Image
                                    src={tag.image}
                                    alt={tag.title}
                                    className="w-5 h-5"
                                  />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })} */}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
