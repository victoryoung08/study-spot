"use client";
import Image from "next/image";
import { Container } from "../../common/Container";
import Link from "next/link";
import { pushDataLayer } from "@/app/lib/gtm";

type heroType = {
  title: string;
  section_title: string;
  description: string;
  cta_text: string;
  cta_link: string;
  image: any;
};

export default function Hero({
  title,
  section_title,
  description,
  cta_text,
  cta_link,
  image,
}: heroType) {
  return (
    <Container>
      <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-center gap-10 text-center lg:text-left">
        <div>
          {section_title && <p className="text-sm mb-3">{section_title}</p>}
          <h1 className="text-4xl capitalize font-bold leading-snug text-white md:text-5xl lg:text-6xl">
            {title || ""}
          </h1>
          {description && (
            <p className="w-3/4 mx-auto lg:w-auto my-5 lg:my-10 text-base text-white lg:text-xl">
              {description || ""}
            </p>
          )}

          {cta_link && (
            <Link
              onClick={() => pushDataLayer({ name: cta_text || "" })}
              href={cta_link || "/"}
              className="btn btn-primary rounded-xl border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
            >
              {cta_text || ""}
            </Link>
          )}
        </div>
        <div className="relative">
          <Image
            src={image?.data?.attributes?.url}
            alt="Hero image"
            width={700}
            height={700}
            className="rounded-2xl  lg:h-full mx-auto lg:mx-0"
          />
          <div className="absolute right-0 bottom-0   shadow z-2 w-20 h-full bg-gradient-to-l from-[#181818] via-[#13121297] to-transparent"></div>
        </div>
      </div>
    </Container>
  );
}
