import { useForm } from "react-hook-form";
import { z } from "zod";
import * as CafeSchema from "@/src/validation/schemas/CafeSchemas";

export type CafeProfileType = z.infer<typeof CafeSchema.CafeSetupSchema>;
export default function useCafeProfileForm() {
  const form = useForm<CafeProfileType>({
    resolver: CafeSchema.resolver,
    defaultValues: CafeSchema.defaultValues,
  });

  const { errors } = form.formState;
  const watchAllFields = form.watch();
  return {
    form,
    watchAllFields,
    errors,
  };
}
