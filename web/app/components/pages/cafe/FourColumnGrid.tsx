import { Container } from "../../common/Container";
import wifi from "@/public/images/wifi.svg";
import charging from "@/public/images/charging.svg";
import chill from "@/public/images/chill.svg";
import cozy from "@/public/images/cozy.svg";
import Image from "next/image";

const vibe = [
  { id: 1, title: "chill", image: chill },
  { id: 2, title: "cozy", image: cozy },
];

const data = [
  {
    id: 1,
    title: "Features",
    items: [
      { id: 1, title: "wifi", image: wifi },
      { id: 2, title: "charging", image: charging },
    ],
  },
  {
    id: 2,
    title: "Styles",
    items: [],
  },
  {
    id: 3,
    title: "Vibe",
    items: [
      { id: 1, title: "cozy", image: cozy },
      { id: 2, title: "chill", image: chill },
    ],
  },
  {
    id: 4,
    title: "Study Length Recommendations",
    items: [{ id: 1, title: "chill", image: chill }],
  },
];
export default function FourColumnGrid({ quietness, item }: any) {
  return (
    <Container>
      <div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {item.map((ctx: any) => {
            return (
              <div key={ctx.id}>
                <div>
                  <h2 className="text-2xl font-semibold">{ctx.title || ""}</h2>
                  <div className="mt-2 space-y-2">
                    {ctx.tag.map((tag: any) => {
                      return (
                        <div key={tag.id} className="flex gap-2 items-center">
                          <div className="bg-primary border border-white p-2 rounded-2xl">
                            <Image
                              src={chill}
                              alt={tag.title}
                              width={5}
                              height={5}
                              className="w-5 h-5"
                            />
                          </div>
                          <p className="text-base">{ctx.title || ""}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-semibold">Quietness</h2>
          <progress
            className="progress w-80 progress-primary"
            value={quietness || 0}
            max="100"
          ></progress>
          <p className="text-sm">Cafe Chatter</p>
        </div>
      </div>
    </Container>
  );
}
