import Image from "next/image";
import { Container } from "../../common/Container";
import Link from "next/link";

type TwoColumnCtaImageLeftType = {
  title: string;
  description: string;
  cta_text: string;
  cta_link: string;
  image: any;
};

export default function TwoColumnCtaImageLeft({
  title,
  description,
  image,
  cta_text,
  cta_link,
}: TwoColumnCtaImageLeftType) {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Image
            src={image?.data?.attributes?.url}
            alt={title || ""}
            width={500}
            height={500}
            className="mx-auto h-96 w-96 lg:h-auto lg:w-auto rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="mt-5 text-2xl font-semibold leading-tight lg:mt-0 lg:text-left lg:text-3xl">
            {title || ""}
          </h2>
          <p className="mt-5 mb-5 text-sm lg:text-base">{description || ""}</p>
          {cta_link && (
            <Link
              href={cta_link || "/"}
              type="button"
              className="mt-5 lg:mt-10 btn bg-[#505050] hover:bg-primary rounded-xl text-white border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
            >
              {cta_text || ""}
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
}
