import {
  Control,
  UseFormGetValues,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { Button } from "@/app/components/ui/button";
import { CafeProfileType } from "../../profile/form/useCafeProfileForm";
import UseFormField from "../../profile/form/useFormField";
import UseFormFieldCheckbox from "../../profile/form/useFormFieldCheckbox";
import { useState } from "react";

interface CafeFeaturesFormProps {
  control: Control<CafeProfileType>;
  trigger: UseFormTrigger<CafeProfileType>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setValue: UseFormSetValue<CafeProfileType>;
  getValues: UseFormGetValues<CafeProfileType>;
}

export default function CafeFeatures({
  control,
  trigger,
  setStep,
  setValue,
  getValues,
}: CafeFeaturesFormProps) {
  async function handleStepFour() {
    // const isComplete = await trigger(["isChill", "location"]);

    // console.log(isComplete);
    // if (isComplete) {
    setStep(4);
    // }
  }

  const [wifi, setWifi] = useState<{ [key: string]: boolean }>({
    hasWifi: false,
    hasNoWifi: false,
  });

  const [charging, setCharging] = useState<{
    [key: string]: boolean;
  }>({
    hasCharging: false,
    hasNoCharging: false,
  });

  const handleCharingcheckbox = (name: string) => {
    const updatedState = { ...charging };

    // Set the checked state of the clicked checkbox to true
    updatedState[name] = !charging[name];

    // Disable other checkboxes when one checkbox is checked
    Object.keys(updatedState).forEach((key) => {
      if (key !== name && updatedState[name]) {
        updatedState[key] = false;
      }
    });

    setCharging(updatedState);

    // set form value to false if the selected value is /no charging'
    if (updatedState.hasNoCharging === true) {
      setValue("hasCharging", false);
    }
  };

  const handleWifiCheckbox = (name: string) => {
    const updatedState = { ...wifi };

    // Set the checked state of the clicked checkbox to true
    updatedState[name] = !wifi[name];

    // Disable other checkboxes when one checkbox is checked
    Object.keys(updatedState).forEach((key) => {
      if (key !== name && updatedState[name]) {
        updatedState[key] = false;
      }
    });

    setWifi(updatedState);

    // set form value to false if the selected value is /no charging'
    if (updatedState.hasNoWifi === true) {
      setValue("hasWifi", false);
    }
  };

  return (
    <div className="lg:w-2/4 mx-auto">
      <div className="space-y-5">
        <div className="border-b border-[#454545]  pb-5">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">
              What best describes your cafe?
            </h2>
          </div>
          <div className="flex mx-10 gap-16 items-center">
            <UseFormFieldCheckbox
              control={control}
              placeholder="Chill"
              name="isChill"
            />
            <UseFormFieldCheckbox
              control={control}
              placeholder="Cozy"
              name="isCozy"
            />
            <UseFormFieldCheckbox
              control={control}
              placeholder="Fast"
              name="isFast"
            />
            <UseFormFieldCheckbox
              control={control}
              placeholder="Upbeat"
              name="isUpbeat"
            />
          </div>
        </div>
        <div className="border-b border-[#454545] pb-5">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">Do you have Wi-Fi?</h2>
          </div>
          <div className="flex mx-10 gap-16 items-center">
            <UseFormFieldCheckbox
              control={control}
              placeholder="Yes"
              name="hasWifi"
              isChecked={wifi["hasWifi"]}
              handleInputChange={() => handleWifiCheckbox("hasWifi")}
            />
            <UseFormFieldCheckbox
              control={control}
              placeholder="No"
              isChecked={wifi["hasNoWifi"]}
              handleInputChange={() => handleWifiCheckbox("hasNoWifi")}
            />
          </div>
        </div>
        <div className="border-b border-[#454545]  pb-5">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">Do you have Charging?</h2>
          </div>
          <div className="flex mx-10 gap-16 items-center">
            <UseFormFieldCheckbox
              control={control}
              placeholder="Yes"
              name="hasCharging"
              isChecked={charging["hasCharging"]}
              handleInputChange={() => handleCharingcheckbox("hasCharging")}
            />
            <UseFormFieldCheckbox
              control={control}
              placeholder="No"
              name=""
              isChecked={charging["hasNoCharging"]}
              handleInputChange={() => handleCharingcheckbox("hasNoCharging")}
            />
          </div>
        </div>
        <div className="border-b border-[#454545]  pb-5">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">What style is your cafe? </h2>
          </div>
          <div className="flex mx-10 gap-16 items-center">
            <UseFormFieldCheckbox
              control={control}
              placeholder="Minimal"
              name="isMinimal"
            />
            <UseFormFieldCheckbox
              control={control}
              placeholder="Artistic"
              name="isArtistic"
            />
            <UseFormFieldCheckbox
              control={control}
              placeholder="Nature"
              name="isNature"
            />
            <UseFormFieldCheckbox
              control={control}
              placeholder="Vintage"
              name="isVintage"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <Button
          onClick={() => setStep(2)}
          className="w-1/4 my-5 bg-transparent text-white hover:bg-transparent border border-white"
        >
          Previous
        </Button>
        <Button
          onClick={handleStepFour}
          className="w-1/4 my-5 bg-primary text-white hover:bg-primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
