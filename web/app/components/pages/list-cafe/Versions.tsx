import { Container } from "../../common/Container";

const data = [
  {
    id: 1,
    title: "V 1.0",
    isCurrent: true,
    data: [
      { id: 1, text: "Partner with 25 Foundational Study Spots" },
      {
        id: 2,
        text: "Directory-style app to allow Study Spot users discover your cafe",
      },
      {
        id: 3,
        text: "Grow our social media & Google SEO and direct visibility to your cafe",
      },
      { id: 4, text: "Collaborate with social media content with your Cafe" },
    ],
  },
  {
    id: 2,
    title: "V 1.1",
    isCurrent: false,
    data: [
      { id: 1, text: "Integrate interactive map view for Study Spot App" },
      {
        id: 2,
        text: "Onboard additional 50 Study Spots",
      },
      {
        id: 3,
        text: "Initiate Study Spot User Database for Email Marketing",
      },
    ],
  },
  {
    id: 3,
    title: "V 1.2",
    isCurrent: false,
    data: [
      { id: 1, text: "Develop user & business logins" },
      {
        id: 2,
        text: "Business Analytic Dashboard for discoverability & revenue metrics",
      },
      {
        id: 3,
        text: "Rollout Email Marketing for your Cafe with our Study Spot Database",
      },
    ],
  },
];

export default function Versions() {
  return (
    <Container>
      <div className="lg:py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {data.map((version) => {
            return (
              <div key={version.id}>
                <div
                  className={`border border-white rounded-full px-4 py-1 w-44 md:w-auto lg:w-3/5 flex items-center  ${
                    version.isCurrent
                      ? "bg-primary justify-between"
                      : "border gap-2"
                  }`}
                >
                  {version.isCurrent === false && (
                    <div className="w-5 h-5 rounded-full bg-white" />
                  )}
                  <p className="font-semibold">{version.title}</p>
                  {version.isCurrent && <p className="text-sm">Current</p>}
                  {version.isCurrent && (
                    <div className="w-5 h-5 rounded-full bg-white" />
                  )}
                </div>
                <div className="space-y-3 mt-5">
                  {version.data.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={`rounded-2xl border border-white p-5 ${
                          version.isCurrent ? "bg-[#3a3939]" : ""
                        }`}
                      >
                        <div>
                          <p className="text-sm">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
