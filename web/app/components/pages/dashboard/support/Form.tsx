"use client";
import { Button } from "@/app/components/ui/button";
import CancelSubscription from "./CancelSubscription";
import { useState } from "react";

export default function SupportForm({ hasMembership }: any) {
  return (
    <div>
      <div className="mb-5">
        <p className="text-center">
          We&apos;re here to help. Let us know if you have any feedback or
          questions
        </p>
      </div>
      <div>
        <form action="" className="lg:w-2/4 mx-auto space-y-5">
          <div>
            <textarea
              //   {...register("inquiry")}
              className="textarea textarea-bordered w-full rounded-2xl border-2 border-white focus:border-primary bg-[#3a3939]"
              rows={10}
              placeholder="Your inquiry"
            ></textarea>
          </div>
          <div className="flex gap-5">
            <Button className="w-full sm:w-52 py-5 bg-primary hover:bg-primary border-2 border-white rounded-2xl">
              Submit
            </Button>

            {hasMembership && <CancelSubscription />}
          </div>
        </form>
      </div>
    </div>
  );
}
