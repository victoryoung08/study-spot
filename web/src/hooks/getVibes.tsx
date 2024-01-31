import { CafeProfileType } from "@/app/components/pages/dashboard/profile/useCafeProfileForm";

export default function getVibesArray(data: CafeProfileType) {
  // Conditionally set the features field based on hasCharging and hasWifi values
  const vibes = [];
  if (data.isChill) {
    vibes.push(1);
  }
  if (data.isCozy) {
    vibes.push(2);
  }
  if (data.isFast) {
    vibes.push(3);
  }

  if (data.isUpbeat) {
    vibes.push(4);
  }
  return vibes;
}
