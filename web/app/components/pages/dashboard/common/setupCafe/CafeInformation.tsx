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

    if (isComplete) {
      setStep(3);
    }
  }

  return (
    <div className="lg:w-2/4 mx-auto">
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
          onClick={() => setStep(1)}
          className="w-1/4 my-5 bg-transparent text-white hover:bg-transparent border border-white"
        >
          Previous
        </Button>
        <Button
          onClick={handleStepThree}
          className="w-1/4 my-5 bg-primary text-white hover:bg-primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
