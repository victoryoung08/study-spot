import { Container } from "../../../common/Container";
import Image from "next/image";

export default function Partners({ title, item }: any) {
  return (
    <Container>
      <div className="text-center">
        {title && (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-white mb-5">
            {title || ""}
          </h2>
        )}

        <div className="flex gap-10 items-center justify-center">
          {item.map((item: any) => {
            return (
              <div key={item.id}>
                <Image
                  className="filter grayscale invert"
                  src={item.image?.data?.attributes?.url}
                  alt="image"
                  width={100}
                  height={100}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
