"use client";
import { pushDataLayer } from "@/src/lib/gtm";
import { Container } from "../../common/Container";
import { commonDataType } from "../about/CtaCenter";
import Link from "next/link";

export default function HeroWithBackground({
  title,
  description,
  cta_text,
  cta_link,
  image,
}: commonDataType) {
  return (
    <Container backgroundImage={image?.data?.attributes?.url}>
      <div className="bg-gradient-to-t  from-[#181818] absolute top-0 right-0 bottom-0 left-0 z-10"></div>

      <div className="lg:py-20 z-50 text-center relative">
        <h2 className="text-4xl font-bold leading-snug text-white md:text-5xl lg:text-6xl lg:w-3/4 mx-auto">
          {title || ""}
        </h2>
        <p className="my-5 text-base text-white lg:text-xl">
          {description || ""}
        </p>

        <Link
          onClick={() =>
            pushDataLayer({
              name: cta_text,
              path: cta_link,
            })
          }
          href={cta_link || "/"}
          type="button"
          className="mt-5 btn btn-primary rounded-xl border border-white py-2 text-base capitalize"
        >
          {cta_text || ""}
        </Link>
      </div>
    </Container>
  );
}
