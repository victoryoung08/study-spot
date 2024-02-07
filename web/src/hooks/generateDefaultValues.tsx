import { CafeData, CafeDefaultValues } from "@/types/cafe";
import checkTags from "./checkTags";

/**
 * The function `generateDefaultValues` takes in a `cafeData` object and returns a `CafeDefaultValues`
 * object with default values for various properties.
 * @param {CafeData} cafeData - The `cafeData` parameter is an object that contains data about a cafe.
 * It has the following properties:
 * @returns The function `generateDefaultValues` returns an object of type `CafeDefaultValues`.
 */

function generateDefaultValues(cafeData: CafeData): CafeDefaultValues {
  return {
    cafe_name: cafeData?.cafe_name || "",
    location: cafeData?.location || "",
    suburb: cafeData?.suburb || "",
    Longitude: cafeData?.Longitude || 0,
    Latitute: cafeData?.Latitute || 0,
    quietness: cafeData?.quietness || 0,
    hasCharging: checkTags({ tags: cafeData?.features, tagName: "charging" }),
    hasWifi: checkTags({ tags: cafeData?.features, tagName: "wifi" }),
    isChill: checkTags({ tags: cafeData?.vibes, tagName: "chill" }),
    isFast: checkTags({ tags: cafeData?.vibes, tagName: "fast" }),
    isCozy: checkTags({ tags: cafeData?.vibes, tagName: "cozy" }),
    isUpbeat: checkTags({ tags: cafeData?.vibes, tagName: "upbeat" }),
    isMinimal: checkTags({ tags: cafeData?.styles, tagName: "minimal" }),
    isNature: checkTags({ tags: cafeData?.styles, tagName: "nature" }),
    isArtistic: checkTags({ tags: cafeData?.styles, tagName: "artistic" }),
    isVintage: checkTags({ tags: cafeData?.styles, tagName: "vintage" }),
    discount: cafeData?.discount || "",
    facebook: cafeData?.facebook || "",
    instagram: cafeData?.instagram || "",
    tiktok: cafeData?.tiktok || "",
    // Add other properties with appropriate types
  };
}

// Then you can use this function to generate the default values
export default generateDefaultValues;
