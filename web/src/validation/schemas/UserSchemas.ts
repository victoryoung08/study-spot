import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const SignupFormSchema = z.object({
  email: z
    .string({
      required_error: "email required",
      invalid_type_error: "email must be a string",
    })
    .email({ message: "invalid email" }),
  username: z
    .string({
      required_error: "username required",
      invalid_type_error: "username must be a string",
    })
    .min(8, { message: "invalid username" }),
  password: z
    .string({
      required_error: "password required",
      invalid_type_error: "password must be a string",
    })
    .min(8, { message: "password must be at least 8 characters long" }),
});

export const resolver = zodResolver(SignupFormSchema);
export const defaultValues = {
  email: "",
  password: "",
  username: "",
};
