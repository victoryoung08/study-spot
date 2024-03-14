import getCafeDetails from "@/src/queries/getCafeDetails";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
const phoneRegExp = /^(\+)?\d{1,}$/;

export const CafeSetupSchema = z.object({
  ownerName: z
    .string({
      required_error: "Name is required",
    })
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "invalid email" }),

  contact_number: z
    .string({
      invalid_type_error: "Contact number must be a string",
      required_error: "Contact number is required",
    })
    .regex(phoneRegExp, { message: "invalid Contact Number" }),

  cafe_name: z
    .string({
      required_error: "Cafe name is required",
      invalid_type_error: "Cafe name must be a string",
    })
    .min(3, { message: "Cafe name must be at least 3 characters long" }),
  location: z
    .string({
      required_error: "Cafe address is required",
      invalid_type_error: "Cafe address must be a string",
    })
    .min(3, { message: "Cafe address must be at least 3 characters long" }),
  suburb: z.string({
    invalid_type_error: "Cafe suburb must be a string",
  }),
  Longitude: z.number({
    required_error: "Longitude is required",
    invalid_type_error: "Longitude must be a number",
  }),
  Latitute: z.number({
    required_error: "Latitute is required",
    invalid_type_error: "Latitute must be a number",
  }),
  quietness: z
    .number()
    .max(10, { message: "Cafe quiteness must be below or equal to 10" }),
  hasCharging: z.boolean(),
  hasWifi: z.boolean(),
  isChill: z.boolean(),
  isFast: z.boolean(),
  isCozy: z.boolean(),
  isUpbeat: z.boolean(),
  isMinimal: z.boolean(),
  isNature: z.boolean(),
  isArtistic: z.boolean(),
  isVintage: z.boolean(),
  instagram: z.string({
    invalid_type_error: "Instagram link/account must be a string",
  }),
  facebook: z.string({
    invalid_type_error: "Facebook link/account must be a string",
  }),

  tiktok: z.string({
    invalid_type_error: "Tiktok link/account must be a string",
  }),
  discount: z.string({
    invalid_type_error: "Promo code must be a string",
  }),
  hasMembership: z.boolean(),
});

export const resolver = zodResolver(CafeSetupSchema);

export const defaultValues = {
  cafe_name: "",
  suburb: "",
  Longitude: 0,
  Latitute: 0,
  quietness: 0,
  hasCharging: false,
  hasWifi: false,
  isChill: false,
  isFast: false,
  isCozy: false,
  isUpbeat: false,
  isMinimal: false,
  isNature: false,
  isArtistic: false,
  isVintage: false,
  instagram: "",
  facebook: "",
  tiktok: "",
  discount: "",
  images: [],
  hasMembership: false,
  ownerName: "",
  email: "",
  contact_number: "",
};
