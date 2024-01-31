import { CafeProfileType } from "@/app/components/pages/dashboard/profile/useCafeProfileForm";

export default function getFeaturesArray(data: CafeProfileType) {
  // Conditionally set the features field based on hasCharging and hasWifi values
  const features = [];
  if (data.hasWifi) {
    features.push(1);
  }
  if (data.hasCharging) {
    features.push(2);
  }

  return features;
}
