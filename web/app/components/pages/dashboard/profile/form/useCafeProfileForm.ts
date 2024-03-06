import { useForm } from "react-hook-form";
import { z } from "zod";
import * as CafeSchema from "@/src/validation/schemas/CafeSchemas";
import { useState } from "react";

export type CafeProfileType = z.infer<typeof CafeSchema.CafeSetupSchema>;
export default function useCafeProfileForm() {
  const form = useForm<CafeProfileType>({
    resolver: CafeSchema.resolver,
    defaultValues: CafeSchema.defaultValues,
  });
  const [step, setStep] = useState(1);

  const { errors } = form.formState;
  const watchAllFields = form.watch();
  return {
    form,
    step,
    setStep,
    watchAllFields,
    errors,
  };
}
