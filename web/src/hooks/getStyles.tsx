import { CafeProfileType } from "@/app/components/pages/dashboard/profile/form/useCafeProfileForm";

export default function getStylesArray(data: CafeProfileType) {
  // Conditionally set the features field based on hasCharging and hasWifi values
  const style = [];
  if (data.isMinimal) {
    style.push(1);
  }
  if (data.isNature) {
    style.push(2);
  }
  if (data.isVintage) {
    style.push(3);
  }

  if (data.isArtistic) {
    style.push(4);
  }
  return style;
}
