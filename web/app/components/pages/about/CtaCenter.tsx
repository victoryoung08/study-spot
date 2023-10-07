import Link from "next/link";
import { Container } from "../../common/Container";

export type commonDataType = {
  title: string;
  description: string;
  cta_text: string;
  cta_link: string;
  image?: any;
};

export default function CtaCenter({
  title,
  description,
  cta_text,
  cta_link,
}: commonDataType) {
  return (
    <Container>
      <div className="lg:py-20 text-center">
        <h2 className="text-4xl font-semibold lg:text-5xl">{title || ""}</h2>
        <p className="text-base lg:text-lg lg:w-3/4 mx-auto my-7">
          {description || ""}
        </p>
        <Link
          href={cta_link || "/"}
          type="button"
          className="btn btn-primary rounded-xl border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
        >
          {cta_text || ""}
        </Link>
      </div>
    </Container>
  );
}
