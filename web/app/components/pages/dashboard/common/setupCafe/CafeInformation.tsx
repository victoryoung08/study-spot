import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { SignupFormType } from "../Signup";
import { Control, UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { Button } from "@/app/components/ui/button";
import { CafeProfileType } from "../../profile/form/useCafeProfileForm";
import UseFormField from "../../profile/form/useFormField";

interface CafeInformationFormProps {
  control: Control<CafeProfileType>;
  trigger: UseFormTrigger<CafeProfileType>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setValue: UseFormSetValue<CafeProfileType>;
}

export default function CafeInformation({
  control,
  trigger,
  setStep,
}: CafeInformationFormProps) {
  async function handleStepThree() {
    const isComplete = await trigger(["cafe_name", "location"]);

    console.log(isComplete);
    if (isComplete) {
      setStep(3);
    }
  }

  function handlePrevStep() {
    setStep(1);
  }

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-3xl font-bold">Personal Information</h2>
      </div>
      <div className="space-y-5">
        <UseFormField
          control={control}
          name="cafe_name"
          setUpCafe={true}
          placeholder="Cafe Name"
        />
        <UseFormField
          control={control}
          name="location"
          setUpCafe={true}
          placeholder="Location"
        />
      </div>
      <div className="mt-5 flex justify-between">
        <Button
          type="button"
          onClick={handlePrevStep}
          className="w-1/4 my-5 bg-transparent text-white hover:bg-transparent border border-white"
        >
          Previous
        </Button>
        <Button
          type="button"
          onClick={handleStepThree}
          className="w-1/4 my-5 bg-primary text-white hover:bg-primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
