import { Slider } from "@/app/components/ui/slider";
import { Switch } from "@/app/components/ui/switch";
import UseFormField from "./useFormField";
import { CafeFormTypes } from "@/types/cafe";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";

export default function CafeDetails({
  cafeData,
  setUpCafe,
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
            <div className="flex flex-col xs:flex-row gap-2  xs:gap-0 justify-between">
              <p>Charging</p>
              <div>
                <UseFormField
                  control={control}
                  name="hasCharging"
                  // empty string for now
                  cafeData={""}
                  isSelect={true}
                />
              </div>
            </div>
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-0 justify-between">
              <p>Wifi</p>
              <div>
                <UseFormField
                  control={control}
                  name="hasWifi"
                  // empty string for now
                  cafeData={""}
                  isSelect={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 md:gap-10">
          <div className="w-full border-2 rounded-2xl p-5">
            <p className="font-bold text-xl">Vibe</p>
            <div className="space-y-2 mt-3">
              <div className="flex justify-between">
                <p>Chill</p>
                <div>
                  <UseFormField
                    control={control}
                    name="isChill"
                    // empty string for now
                    cafeData={""}
                    isSelect={true}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p>Cozy</p>
                <div>
                  <UseFormField
                    control={control}
                    name="isCozy"
                    // empty string for now
                    cafeData={""}
                    isSelect={true}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p>Upbeat</p>
                <div>
                  <UseFormField
                    control={control}
                    name="isUpbeat"
                    // empty string for now
                    cafeData={""}
                    isSelect={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-2 rounded-2xl p-5">
            <p className="font-bold text-xl">Styles</p>
            <div className="space-y-2 mt-3">
              <div className="flex justify-between">
                <p>Minimal</p>
                <div>
                  <UseFormField
                    control={control}
                    name="isMinimal"
                    // empty string for now
                    cafeData={""}
                    isSelect={true}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p>Nature</p>
                <div>
                  <UseFormField
                    control={control}
                    name="isNature"
                    // empty string for now
                    cafeData={""}
                    isSelect={true}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p>Artistic</p>
                <div>
                  <UseFormField
                    control={control}
                    name="isArtistic"
                    // empty string for now
                    cafeData={""}
                    isSelect={true}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p>Vintage</p>
                <div>
                  <UseFormField
                    control={control}
                    name="isVintage"
                    // empty string for now
                    cafeData={""}
                    isSelect={true}
                  />
                </div>
              </div>
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
                        onValueChange={field.onChange}
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
