import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const CafeSetupSchema = z.object({
  cafe_name: z
    .string({
      required_error: "Cafe name is required",
      invalid_type_error: "Cafe name must be a string",
    })
    .min(3, { message: "Cafe name must be at least 3 characters long" }),
  cafe_address: z
    .string({
      required_error: "Cafe address is required",
      invalid_type_error: "Cafe address must be a string",
    })
    .min(3, { message: "Cafe address must be at least 3 characters long" }),
  quiteness: z
    .number()
    .min(1, { message: "Cafe quiteness must be at least 1" })
    .max(10, { message: "Cafe quiteness must be below or equal to 10" }),
  //   hasCharging: z.string({
  //     required_error: "Charging is required",
  //     invalid_type_error: "Charging must be a string",
  //   }),
  hasCharging: z.boolean(),
  hasWifi: z.boolean(),
  isChill: z.boolean(),
  isCozy: z.boolean(),
  isIpbeat: z.boolean(),
  isMinimal: z.boolean(),
  isNature: z.boolean(),
  isArtistic: z.boolean(),
  isVintage: z.boolean(),

  instagram: z
    .string({
      invalid_type_error: "Instagram link/account must be a string",
    })
    .min(3, {
      message: "Instagram link/account must be at least 3 characters long",
    }),
  facebook: z
    .string({
      invalid_type_error: "Facebook link/account must be a string",
    })
    .min(3, {
      message: "Facebook link/account must be at least 3 characters long",
    }),
  tiktok: z
    .string({
      invalid_type_error: "Tiktok link/account must be a string",
    })
    .min(3, {
      message: "Tiktok link/account must be at least 3 characters long",
    }),
  promocode: z
    .string({
      invalid_type_error: "Promo code must be a string",
    })
    .min(1, {
      message: "Promo code must be at least 1 characters long",
    }),
});

export const resolver = zodResolver(CafeSetupSchema);
export const defaultValues = {
  cafe_name: "",
  cafe_address: "",
  quietness: [],
  hasCharging: false,
  hasWifi: false,
  isChill: false,
  isCozy: false,
  isUpbeat: false,
  isMinimal: false,
  isNature: false,
  isArtistic: false,
  isVintage: false,
  instagram: "",
  facebook: "",
  tiktok: "",
  promocode: "",
};
