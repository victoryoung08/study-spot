"use client";
import Link from "next/link";
import { Container } from "../../common/Container";
import { commonDataType } from "../about/CtaCenter";
import { pushDataLayer } from "@/src/lib/gtm";

export default function HeroCenter({
  title,
  description,
  cta_text,
  cta_link,
}: commonDataType) {
  return (
    <Container>
      <div className="lg:py-20 text-center">
        <h2 className="text-5xl font-semibold lg:text-6xl">{title || ""}</h2>
        <p className="text-base lg:text-lg lg:w-3/4 mx-auto my-7">
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
          className="btn btn-primary rounded-xl border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
        >
          {cta_text || ""}
        </Link>
      </div>
    </Container>
  );
}
