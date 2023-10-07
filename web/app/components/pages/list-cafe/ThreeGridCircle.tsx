import { Container } from "../../common/Container";

const data = [
  { id: 1, title: "List and tell us about your cafe." },
  { id: 2, title: "Our Study Spot community find your cafe" },
  { id: 3, title: "Choose how and what you want to promote" },
];

export default function ThreeGridCircle({ title, description, item }: any) {
  return (
    <Container>
      <div className="lg:mx-32">
        <div>
          <h2 className="font-semibold text-4xl lg:text-5xl">{title || ""}</h2>
          <p className="mt-5 text-lg">{description || ""}</p>
        </div>
        <div className="mt-20 grid sm:grid-cols-3 items-center justify-center gap-20">
          {item.map((data: any, index: number) => {
            return (
              <div key={data.id} className="-mt-5 sm:mt-0 relative mx-auto">
                <div className="w-14 h-14 bg-primary rounded-full border flex justify-center items-center absolute -top-7 left-[58px]">
                  <p>{data.id || index + 1}</p>
                </div>
                {data.id % 3 != 0 && (
                  <div className="hidden sm:flex w-full h-0.5 bg-white absolute top-24 left-44" />
                )}

                <div className="border rounded-full h-44 w-44 flex items-center justify-center bg-[#474747]">
                  <div className="text-center mx-5">
                    <p className="text-base">{data.description || ""}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
