"use client";
import { Container } from "../../common/Container";
import { useState } from "react";

export type commonDataType = {
  title: string;
  description: string;
  cta_text: string;
  promo_code: string;
  image?: any;
};

export default function CtaCenter({
  title,
  description,
  cta_text,
  promo_code,
}: commonDataType) {
  const [displayCode, setDisplayCode] = useState(false);

  const displayPromoCode = () => {
    setDisplayCode(true);
  };
  return (
    <Container>
      <div className="lg:py-20 text-center">
        <h2 className="text-4xl font-semibold lg:text-5xl">{title || ""}</h2>
        <p className="text-base lg:text-lg lg:w-3/4 mx-auto my-7">
          {description || ""}
        </p>
        {cta_text && !displayCode ? (
          <button
            onClick={displayPromoCode}
            type="button"
            className="btn btn-primary rounded-xl border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
          >
            {cta_text || ""}
          </button>
        ) : (
          <p>{promo_code || ""}</p>
        )}
      </div>
    </Container>
  );
}
