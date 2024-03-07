import {
  Control,
  UseFormGetValues,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import PersonalInformation from "./PersonalInformation";
import { CafeProfileType } from "../../profile/form/useCafeProfileForm";
import CafeInformation from "./CafeInformation";
import CafeFeatures from "./CafeFeatures";
import ListCafe from "../../../(marketing)/common/ListCafe";

interface SetupCafeWizard {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  control: Control<CafeProfileType>;
  setValue: UseFormSetValue<CafeProfileType>;
  getValues: UseFormGetValues<CafeProfileType>;
  trigger: UseFormTrigger<CafeProfileType>;
  isSubmitted: boolean;
  loading: boolean;
}

export default function SetupCafeWizard({
  step,
  setStep,
  isSubmitted,
  ...props
}: SetupCafeWizard) {
  if (step === 1) {
    return <PersonalInformation {...props} setStep={setStep} />;
  }

  if (step === 2) {
    return <CafeInformation {...props} setStep={setStep} />;
  }

  if (step === 3) {
    return <CafeFeatures {...props} setStep={setStep} />;
  }

  if (step === 4) {
    return <ListCafe {...props} setupCafe={true} />;
  }
}
