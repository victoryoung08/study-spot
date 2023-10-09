import { Container } from "../../common/Container";

export default function TwoColumnText({ item }: any) {
  return (
    <Container>
      <div className="flex flex-col gap-28 lg:gap-44">
        {item.map((data: any) => {
          return (
            <div key={item.id} className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  {data.title || ""}
                </h2>
              </div>
              <div className="">
                {/* <Markdown
                  remarkPlugins={[remarkGfm]}
                  className="text-base lg:text-lg"
                >
                  {data.description || ""}
                </Markdown> */}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
