import { Slider } from "@/app/components/ui/slider";
import { Switch } from "@/app/components/ui/switch";

export default function CafeDetails() {
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
              <Switch
                id="charging"
                className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-grey border-white"
              />
            </div>
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-0 justify-between">
              <p>Charging</p>
              <Switch
                id="charging"
                className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-grey border-white"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 md:gap-10">
          <div className="w-full border-2 rounded-2xl p-5">
            <p className="font-bold text-xl">Vibe</p>
            <div className="space-y-2 mt-3">
              <div className="flex justify-between">
                <p>Chill</p>
                <Switch
                  id="charging"
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-grey border-white"
                />
              </div>
              <div className="flex justify-between">
                <p>Cozy</p>
                <Switch
                  id="charging"
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-grey border-white"
                />
              </div>
              <div className="flex justify-between">
                <p>Upbeat</p>
                <Switch
                  id="charging"
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-grey border-white"
                />
              </div>
            </div>
          </div>
          <div className="w-full border-2 rounded-2xl p-5">
            <p className="font-bold text-xl">Styles</p>
            <div className="space-y-2 mt-3">
              <div className="flex justify-between">
                <p>Minimal</p>
                <Switch
                  id="charging"
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-grey border-white"
                />
              </div>
              <div className="flex justify-between">
                <p>Nature</p>
                <Switch
                  id="charging"
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-grey border-white"
                />
              </div>
              <div className="flex justify-between">
                <p>Artistic</p>
                <Switch
                  id="charging"
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-grey border-white"
                />
              </div>
              <div className="flex justify-between">
                <p>Vintage</p>
                <Switch
                  id="charging"
                  className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-grey border-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-2xl p-5">
          <p className="font-bold text-xl">Quietness</p>
          <div className="sm:flex gap-5 md:gap-10 mt-2">
            <p>Cafe Chatter</p>
            <Slider
              id="charging"
              defaultValue={[7]}
              max={10}
              step={1}
              className="mt-2 sm:mt-0 sm:w-4/6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-grey border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
