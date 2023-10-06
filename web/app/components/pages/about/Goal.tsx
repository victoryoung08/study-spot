import { Container } from "../../common/Container";

const data = [
  {
    id: 1,
    title: "We understand the challenges",
    desc1:
      "Cafes can be a tough business model. With increasing rents, wages and cost of food - we wanted to support cafes find more success.",
    desc2:
      "Our goal is to fill up your quiet times with students and remote workers, helping you grow your cafe even more",
  },
  {
    id: 2,
    title: "And cafes... have a special place in our hearts",
    desc1:
      "We were all students at one stage. And with a mostly remote-team we often find ourselves supporting cafes with coffee and food in exchange for letting us work there!",
    desc2: "So if you're reading this, thank you!",
  },
];

export default function Goal() {
  return (
    <Container>
      <div className="flex flex-col gap-28 lg:gap-44">
        {data.map((item) => {
          return (
            <div key={item.id} className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  {item.title}
                </h2>
              </div>
              <div className="space-y-10">
                <p className="text-base lg:text-lg">{item.desc1} </p>
                <p className="text-base lg:text-lg">{item.desc2} </p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
