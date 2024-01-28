"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useEffect, useState } from "react";

export default function Promotion({ cafeData, setUpCafe }: any) {
  const [promoCode, setPromoCode] = useState(true);

  const editPromoCode = () => {
    setPromoCode((current) => !current);
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
              <p>{cafeData?.discount || "No promo code"}</p>
              <Button
                onClick={editPromoCode}
                className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
              >
                Edit
              </Button>
            </div>
          ) : (
            <div className="xs:w-3/4 gap-5 flex items-center justify-between">
              <Input
                type="text"
                //   {...register("cafe_name")}
                placeholder="Promo Code"
                defaultValue={cafeData?.discount || ""}
                className="w-full
               focus-visible:ring-0 px-5 focus-visible:ring-offset-0  rounded-2xl border-2 border-white text-sm bg-[#3a3939] "
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
