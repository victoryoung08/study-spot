import Image from "next/image";
import { Container } from "../../common/Container";
import image from "@/public/images/your-schedule.webp";

const list = [
  { id: 1, title: "We're open and flexible with when you create!" },
  { id: 2, title: "We'll discuss what works best for you and your schedule" },
  {
    id: 3,
    title:
      "If you can only create 1 video a week great! 3? Even better! Just let us know",
  },
  { id: 4, title: "Freelance/Contract & Part-time/Casual Positions available" },
];

export default function TwoColumnImageLeft({ item }: any) {
  return (
    <Container>
      <div className="space-y-44">
        {item.map((ctx: any) => {
          console.log(ctx);
          return (
            <div key={ctx.id} className="grid sm:grid-cols-2 gap-5">
              <div>
                <Image
                  src={ctx?.image?.data?.attributes?.url || image}
                  alt={ctx.title || "Image"}
                  height={300}
                  width={400}
                  className="mx-auto rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl mb-5 lg:text-3xl font-semibold">
                  {ctx.title || ""}
                </h3>

                {/* not dynamic */}
                <ul className="space-y-3">
                  {list.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="list-disc list-inside text-sm"
                      >
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
