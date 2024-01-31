import { Slider } from "@/app/components/ui/slider";
import { CafeFormTypes } from "@/types/cafe";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/components/ui/form";
import CafeTags from "./CafeTags";

export default function CafeDetails({
  cafeData,
  control,
}: // control,
CafeFormTypes) {
  return (
    <div className="md:w-2/4 lg:w-2/6">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold">Cafe Details</h3>
          <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
        </div>
        <div className="border-2 rounded-2xl p-5">
          <p className="font-bold text-xl">Features</p>
          <div className="grid grid-cols-2 gap-5 md:gap-10 mt-2">
            <CafeTags
              tagName="charging"
              name="hasCharging"
              control={control}
              tags={cafeData?.features}
            />
            <CafeTags
              tagName="wifi"
              name="hasWifi"
              control={control}
              tags={cafeData?.features}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 md:gap-10">
          <div className="w-full border-2 rounded-2xl p-5">
            <p className="font-bold text-xl">Vibe</p>
            <div className="space-y-2 mt-3">
              <CafeTags
                tagName="chill"
                name="isChill"
                control={control}
                tags={cafeData?.vibes}
              />
              <CafeTags
                tagName="fast"
                name="isFast"
                control={control}
                tags={cafeData?.vibes}
              />

              <CafeTags
                tagName="cozy"
                name="isCozy"
                control={control}
                tags={cafeData?.vibes}
              />
              <CafeTags
                tagName="Upbeat"
                name="isUpbeat"
                control={control}
                tags={cafeData?.vibes}
              />
            </div>
          </div>
          <div className="w-full border-2 rounded-2xl p-5">
            <p className="font-bold text-xl">Styles</p>
            <div className="space-y-2 mt-3">
              <CafeTags
                tagName="minimal"
                name="isMinimal"
                control={control}
                tags={cafeData?.styles}
              />
              <CafeTags
                tagName="nature"
                name="isNature"
                control={control}
                tags={cafeData?.styles}
              />
              <CafeTags
                tagName="artistic"
                name="isArtistic"
                control={control}
                tags={cafeData?.styles}
              />
              <CafeTags
                tagName="Vintage"
                name="isVintage"
                control={control}
                tags={cafeData?.styles}
              />
            </div>
          </div>
        </div>
        <div className="border-2 rounded-2xl p-5">
          <p className="font-bold text-xl">Quietness</p>
          <div className="sm:flex gap-5 md:gap-10 mt-2">
            <p>Cafe Chatter</p>
            <div className="sm:w-4/6">
              <FormField
                control={control}
                name="quietness"
                render={({ field }) => (
                  <FormItem className=" w-full ">
                    <FormControl>
                      <Slider
                        max={10}
                        step={1}
                        value={[field.value]}
                        onValueChange={(values) => field.onChange(values[0])} // Extract the value from the array
                        className="mt-2 sm:mt-0 w-full data-[state=checked]:bg-primary data-[state=unchecked]:bg-grey border-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
