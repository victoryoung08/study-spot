"use client";

import { pushDataLayer } from "@/src/lib/gtm";
import { Container } from "../../../common/Container";
import Image from "next/image";
import Link from "next/link";

export default function TwoColumnCtaList({
  title,
  description,
  cta_text,
  cta_link,
  libraries,
}: any) {
  return (
    <Container>
      <div
        data-aos="zoom-in-right"
        className={
          libraries.data.length === 0
            ? "flex items-center justify-center text-center"
            : "lg:my-20 grid lg:grid-cols-2 gap-10 text-center lg:text-left"
        }
      >
        <div>
          <h2 className="mt-5 text-4xl font-semibold leading-tight lg:mt-0  lg:text-3xl">
            {title || ""}
          </h2>
          <p className="mt-5 lg:mt-10 mb-5 text-base ">{description || ""}</p>
          <Link
            onClick={() => pushDataLayer({ name: cta_text || "" })}
            href={cta_link || "/"}
            type="button"
            className="btn btn-primary rounded-xl border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
          >
            {cta_text || ""}
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center text-left">
          {libraries?.data
            ?.map((library: any) => {
              return (
                <Link
                  onClick={() =>
                    pushDataLayer({
                      name: library.attributes.title || "",
                      path: `/library/${library.attributes.slug}` || "",
                    })
                  }
                  data-aos="zoom-in-left"
                  href={`/library/${library.attributes.slug}`}
                  key={library.id}
                  className="flex flex-col sm:flex-row items-center border border-white rounded-2xl md:w-3/4 lg:w-auto"
                >
                  <Image
                    src={
                      library?.attributes?.library_image?.data?.attributes?.url
                    }
                    alt={
                      library?.attributes?.library_image?.data?.attributes
                        ?.alternativeText || library?.attributes?.title
                    }
                    className="w-full sm:w-44 lg:w-2/4 sm:h-28 rounded-tl-2xl rounded-tr-2xl sm:rounded-tr-none sm:rounded-bl-2xl"
                    width={500}
                    height={500}
                  />
                  <span className="text-sm lg:text-base font-medium m-5 sm:mx-5">
                    {library?.attributes?.short_description || ""}
                  </span>
                </Link>
              );
            })
            .slice(0, 3)}
        </div>
      </div>
    </Container>
  );
}
