import { Container } from "../../common/Container";
import Image from "next/image";

export default function Features({ item }: any) {
  return (
    <Container>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
        {item?.map((feature: any) => {
          return (
            <div data-aos="zoom-in" key={item.id} className="text-center">
              <Image
                src={feature.image?.data?.attributes?.url}
                alt={feature.title}
                className="mx-auto"
                width={200}
                height={200}
              />
              <p className="mt-2 font-bold lg:text-2xl">
                {feature.title || ""}
              </p>
              <p className="mt-5 text-base">{feature.description || ""}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
