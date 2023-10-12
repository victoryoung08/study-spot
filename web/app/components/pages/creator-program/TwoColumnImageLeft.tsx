import Image from "next/image";
import { Container } from "../../common/Container";
import image from "@/public/images/your-schedule.webp";
import Markdown from "markdown-to-jsx";

export default function TwoColumnImageLeft({ item }: any) {
  return (
    <Container>
      <div className="space-y-44">
        {item.map((ctx: any) => {
          return (
            <div key={ctx.id} className="grid sm:grid-cols-2 gap-5">
              <div>
                <Image
                  src={ctx?.image?.data?.attributes?.url || ""}
                  alt={ctx.title + " Image" || "Image"}
                  height={300}
                  width={400}
                  className="mx-auto rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl mb-5 lg:text-3xl font-semibold">
                  {ctx.title || ""}
                </h3>
                {/* <Markdown
                  options={{
                    overrides: {
                      li: {
                        component: "li",
                      },
                    },
                  }}
                >
                  {ctx.drescription}
                </Markdown> */}
                
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
