import { CafeFormTypes } from "@/types/cafe";

import CafeImages from "./CafeImage";
import { CafeAddress, CafeSuburb } from "./CafeLocation";
import { CafeName } from "./CafeName";

export default function BasicInformation({
  setUpCafe,
  control,
}: CafeFormTypes) {
  return (
    <div>
      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-bold">Basic Information</h3>
          <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
        </div>
        <CafeImages setUpCafe={setUpCafe} />
        <div className="grid md:grid-cols-2 gap-10 lg:w-3/4">
          <CafeName setUpCafe={setUpCafe} control={control} />
          <CafeAddress setUpCafe={setUpCafe} control={control} />
          <CafeSuburb setUpCafe={setUpCafe} control={control} />
        </div>
      </div>
    </div>
  );
}
