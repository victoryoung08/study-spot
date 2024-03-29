import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CafeProfileType } from "./useCafeProfileForm";
import fetchWrapper from "@/src/helper/fetchWrapper";
import getSession from "@/src/helper/getSession";
import getFeaturesArray from "@/src/hooks/getFeatures";
import getStyleArray from "@/src/hooks/getStyles";
import getVibesArray from "@/src/hooks/getVibes";
import { useCreateImage } from "@/app/store/imageUpload";
import uploadImage from "@/src/queries/uploadImages";
import setUserCafe from "@/src/queries/setUserCafe";
import getAccessToken from "@/src/helper/getAccessToken";
import { useCafeData } from "@/app/store/cafeData";
import getAddressCoordinates from "@/src/helper/getAddressCoordinates";
import { usePathname, useRouter } from "next/navigation";

export default function useCafeProfileFormSubmit() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { session } = getSession();
  const router = useRouter();
  const image = useCreateImage((state) => state.images);
  const cafeDetails = useCafeData((state) => state.cafe);
  const pathname = usePathname();

  async function onSubmit(data: CafeProfileType) {
    try {
      setLoading(true);
      const location = await getAddressCoordinates(data.location);
      const features = getFeaturesArray(data);
      const styles = getStyleArray(data);
      const vibes = getVibesArray(data);
      console.log("features", features);
      console.log("styles", styles);
      console.log("vibes", vibes.length > 0 ? vibes : null);

      const cafeData = {
        data: {
          ...data,
          ...(cafeDetails?.id ? { id: cafeDetails?.id } : {}),
          // Add slug only if cafeDetails is not present
          ...(cafeDetails?.id
            ? {}
            : { slug: data.cafe_name.toLowerCase().replace(/\s+/g, "-") }),
          features: features.length > 0 ? features : null,
          styles: styles.length > 0 ? styles : null,
          vibes: vibes.length > 0 ? vibes : null,
          Longitude: location?.longitude || 0,
          Latitute: location?.latitude || 0,
          suburb: location?.suburb || data.location,
        },
      };

      const accessToken = await getAccessToken();
      if (!accessToken) {
        throw new Error("Failed to fetch access token");
      }
      const response: Record<string, any> = await fetchWrapper({
        endpoint: cafeDetails?.id
          ? `study-spots/${cafeDetails?.id}`
          : "study-spots",
        options: {
          method: cafeDetails?.id ? "PUT" : "POST",
          headers: {
            Authorization: `Bearer  ${accessToken}`,
          },
          data: cafeData,
        },
      });
      if (response.error) {
        toast.error(`${response.error.error}`);
        setLoading(false);
        return;
      }

      console.log("cafeData", cafeData);
      // console.log("response", response);

      const cafeId = response?.data?.data?.id;

      if (cafeId && !cafeDetails?.id) {
        if (image.length > 0) {
          await uploadImage(image, cafeId);
        }
        if (session?.user?.id) {
          await setUserCafe(
            cafeId,
            session?.user?.id,
            data?.ownerName,
            data?.contact_number
          );
        }
      }

      // toast.success("Cafe Details submitted successfully");
      setLoading(false);

      setIsSubmitted(true);

      if (pathname?.includes("/dashboard/profile ")) {
        setTimeout(() => {
          router.push("/dashboard/profile");
        }, 300);
      }
    } catch (error) {
      console.error("An error occurred:", error);

      return null;
    }
  }

  return { onSubmit, loading, isSubmitted };
}
