"use client";
import { Container } from "../../../common/Container";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { pushDataLayer } from "@/src/lib/gtm";

export type commonDataType = {
  cafeName: string;
  suburb: string;
  title: string;
  description: string;
  cta_text: string;
  cta_link?: string;
  promo_code: string;
  image?: any;
};

export default function CtaCenter({
  cafeName,
  suburb,
  title,
  description,
  cta_text,
  promo_code,
  cta_link,
}: commonDataType) {
  const [displayCode, setDisplayCode] = useState(false);
  const [suburbLocation, setSuburbLocation] = useState<String>();
  const displayPromoCode = () => {
    setDisplayCode(true);
  };
  const pathname = usePathname();

  useEffect(() => {
    if (suburb) {
      const suburbLocation = suburb
        .split("-")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("%20");
      setSuburbLocation(suburbLocation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="lg:py-20 text-center">
        <h2 className="text-4xl font-semibold lg:text-5xl">{title || ""}</h2>
        <p className="text-base lg:text-lg lg:w-3/4 mx-auto my-7">
          {description || ""}
        </p>
        {pathname?.includes("/cafe") && promo_code ? (
          <>
            {cta_text && !displayCode && suburb ? (
              <button
                onClick={() => {
                  displayPromoCode();
                  pushDataLayer({
                    name: cta_text,
                    path: `/cafe/${suburbLocation}/${cafeName}`,
                  });
                }}
                type="button"
                className="btn btn-primary rounded-xl border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
              >
                {cta_text || ""}
              </button>
            ) : (
              <p>{promo_code || ""}</p>
            )}
          </>
        ) : (
          <>
            {cta_link && cta_text && (
              <Link
                onClick={() =>
                  pushDataLayer({
                    name: cta_text,
                    path: cta_link,
                  })
                }
                href={cta_link || ""}
                className="btn btn-primary rounded-xl border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
              >
                {cta_text || ""}
              </Link>
            )}
          </>
        )}
      </div>
    </Container>
  );
}
