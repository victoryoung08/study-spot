import { Control, UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { Button } from "@/app/components/ui/button";
import { CafeProfileType } from "../../profile/form/useCafeProfileForm";
import UseFormField from "../../profile/form/useFormField";

interface PersonalInformationFormProps {
  control: Control<CafeProfileType>;
  trigger: UseFormTrigger<CafeProfileType>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setValue: UseFormSetValue<CafeProfileType>;
}

export default function PersonalInformation({
  control,
  trigger,
  setStep,
}: PersonalInformationFormProps) {
  async function handleStepTwo() {
    const isComplete = await trigger(["ownerName", "email", "contact_number"]);

    console.log(isComplete);
    if (isComplete) {
      setStep(2);
    }
  }

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-3xl font-bold">Personal Information</h2>
      </div>
      <div className="space-y-5">
        <UseFormField
          control={control}
          name="ownerName"
          setUpCafe={true}
          placeholder="Name"
        />
        <UseFormField
          control={control}
          name="email"
          setUpCafe={true}
          placeholder="Email"
        />
        <UseFormField
          control={control}
          setUpCafe={true}
          name="contact_number"
          placeholder="Contact Number"
        />
      </div>
      <div className="mt-5 flex justify-end">
        <Button
          type="button"
          onClick={handleStepTwo}
          className="w-1/4 my-5 bg-primary text-white hover:bg-primary-hover"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
