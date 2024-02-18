"use client";
import { useCallback, useEffect, useState } from "react";
import Cafe from "./Cafe";
import Filter from "./Filter";
import MapView from "./Map";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import getUniqueValues from "@/src/hooks/getUniqueValues";

type ContentProps = {
  study_spots: any;
};

export default function SpotFinder({ study_spots }: ContentProps) {
  const featuresRaw = study_spots.data.map((item: any) => {
    return item.attributes.features;
  });
  const vibesRaw = study_spots.data.map((item: any) => {
    return item.attributes.vibes;
  });
  const stylesRaw = study_spots.data.map((item: any) => {
    return item.attributes.styles;
  });
  const features = getUniqueValues(featuresRaw);
  const vibes = getUniqueValues(vibesRaw);
  const styles = getUniqueValues(stylesRaw);
  const cafe = study_spots.data;

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const filter = selectedTags.map((item: any) => item.item);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  /**
   * Create a new array of cafes with tags
   */
  const cafeWithTags = cafe.map((item: any) => {
    return {
      ...item,
      tags: [
        ...item.attributes.features.data.map(
          (item: any) => item.attributes.item
        ),
        ...item.attributes.vibes.data.map((item: any) => item.attributes.item),
        ...item.attributes.styles.data.map((item: any) => item.attributes.item),
      ],
    };
  });

  const filteredCafe = cafeWithTags.filter((item: any) => {
    // Check if all elements in the 'filter' array are present in the 'tags' array of the current item.
    return filter.every((tag) => item.tags.includes(tag));
  });

  const [view, setView] = useState<"grid" | "map">(
    (searchParams?.get("view") as "grid" | "map") || "grid"
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      // const params = new URLSearchParams(searchParams);
      const params = searchParams
        ? new URLSearchParams(searchParams)
        : undefined;

      params?.set(name, value);

      return params?.toString();
    },
    [searchParams]
  );

  const toggleView = () => {
    // Toggle the view state
    const newView = view === "grid" ? "map" : "grid";
    setView(newView);

    router.push(pathname + "?" + createQueryString("view", newView));
  };

  useEffect(() => {
    // Get the view from the URL
    const view = searchParams?.get("view");

    // Set the view state
    setView(view === "map" ? "map" : "grid");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className={
          view == "map"
            ? "absolute top-32 right-0 z-40 md:top-0 md:relative flex justify-end gap-2 mx-5 lg:mx-10 mb-5 items-center"
            : "flex justify-end gap-2 mx-5 lg:mx-10 mb-5 items-center"
        }
      >
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="toggle toggle-base toggle-lg"
            onChange={toggleView}
            checked={view === "map" ? true : false}
          />

          <span
            className={`label-text ml-2 flex gap-1 ${
              view == "map"
                ? "text-white bg-primary/80 p-2 rounded-2xl  md:bg-transparent md:text-primary"
                : "text-white"
            }`}
          >
            <MapPinIcon className="w-5 h-5" />
            Map
          </span>
        </label>
      </div>

      <div className="flex gap-5 lg:gap-10 relative">
        <div className="w-full md:w-72 fixed md:left-5 lg:left-10 bottom-0 md:relative z-10">
          <Filter
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            features={features}
            vibes={vibes}
            styles={styles}
          />
        </div>
        <div
          className={`flex-1   ${
            view === "map" ? "md:px-5" : "container mx-auto px-5"
          }`}
        >
          {
            {
              grid: <Cafe cafe={filteredCafe} />,
              map: <MapView cafe={filteredCafe} />,
            }[view]
          }
        </div>
      </div>
    </>
  );
}
