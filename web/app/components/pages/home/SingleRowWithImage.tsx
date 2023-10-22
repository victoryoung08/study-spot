import Image from "next/image";
import { Container } from "../../common/Container";

type singleRowImageType = {
  title: string;
  description: string;
  image: any;
};
export default function SingleRowWithImage({
  title,
  description,
  image,
}: singleRowImageType) {
  return (
    <Container>
      <div data-aos="fade-up" className="lg:my-20">
        <div className="space-y-5 text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">{title || ""}</h2>
          <p className="text-base lg:text-lg">{description || ""}</p>
          <div className="relative">
            <Image
              src={image?.data?.attributes?.url}
              alt={image?.data?.attributes?.alternativeText || "Image"}
              className="mx-auto mt-10 rounded-2xl"
              width={500}
              height={500}
            />
            <div className="bg-gradient-to-t from-[#181818] h-56 w-full right-0 left-0 bottom-0 absolute "></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
