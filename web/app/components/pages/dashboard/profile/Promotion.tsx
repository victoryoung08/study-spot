"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useEffect, useState } from "react";
import UseFormField from "./useFormField";
import { CafeFormTypes } from "@/types/cafe";

export default function Promotion({
  cafeData,
  setUpCafe,
  control,
}: // control,
CafeFormTypes) {
  const [discount, setDiscount] = useState(cafeData?.discount || "");
  const [promoCode, setPromoCode] = useState(true);

  const editPromoCode = () => {
    setPromoCode((current) => !current);
  };

  const handlePromocodeChange = (event: any) => {
    setDiscount(event?.target?.value);
    // console.log(event.target.value);
  };
  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Promotion</h3>
        <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
      </div>
      <div className="mt-6">
        <div className="xs:flex items-center justify-between">
          <p>Promo Code:</p>
          {promoCode && !setUpCafe ? (
            <div className="xs:w-3/4 gap-5 flex items-center justify-between">
              <p>{discount || "No promo code"}</p>
              <Button
                onClick={editPromoCode}
                className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
              >
                Edit
              </Button>
            </div>
          ) : (
            <div className="xs:w-3/4 gap-5 flex items-center justify-between">
              <UseFormField
                control={control}
                name="discount"
                // empty string for now
                // cafeData={""}
                placeholder="Promo Code"
                inputValue={discount}
                handleInputChange={handlePromocodeChange}
              />
              {!setUpCafe && (
                <Button
                  onClick={editPromoCode}
                  className="border-2  bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
                >
                  Save
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
