import { Container } from "../../common/Container";

const data = [
  { id: 1, title: "List and tell us about your cafe." },
  { id: 2, title: "Our Study Spot community find your cafe" },
  { id: 3, title: "Choose how and what you want to promote" },
];

export default function HowStudySpotWorks() {
  return (
    <Container>
      <div className="lg:mx-32">
        <div>
          <h2 className="font-semibold text-4xl lg:text-5xl">
            How Study Spot Works
          </h2>
          <p className="mt-5 text-lg">
            Our app works as a directory. <br /> This means students, digital
            nomads and remote workers are able to search and find your cafe.
          </p>
          <p className="text-lg">
            We&apos;ll also help build your listing as an Early Study Spot Cafe.
          </p>
        </div>
        <div className="mt-20 grid sm:grid-cols-3 items-center justify-center">
          {data.map((item) => {
            return (
              <div key={item.id} className="-mt-5 sm:mt-0 relative mx-auto">
                <div className="w-14 h-14 bg-primary rounded-full border flex justify-center items-center absolute -top-7 left-[50px]">
                  <p>{item.id}</p>
                </div>
                {item.id != 3 && (
                  <div className="hidden sm:flex w-full h-0.5 bg-white absolute top-24 left-40" />
                )}
                {/* {item.id != 3 && (
                  <div className="flex lg:hidden w-0.5 h-24 bg-white absolute top-48 left-[78px]" />
                )} */}
                <div className="border rounded-[65px] h-48 w-40 flex items-center justify-center bg-[#474747]">
                  <div className="text-center mx-5">
                    <p className="text-base">{item.title}</p>
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
