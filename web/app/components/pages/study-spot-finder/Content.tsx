"use client";
import { useCallback, useEffect, useState } from "react";
import Cafe from "./Cafe";
import Filter from "./Filter";
import MapView from "./Map";
// import { set } from "lodash";
// import Lottie from "lottie-react";
import { MapIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

type ContentProps = {
  features: any;
  vibes: any;
  styles: any;
  cafe: any;
};

export default function Content({
  features,
  vibes,
  styles,
  cafe,
}: ContentProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const filter = selectedTags.map((item: any) => item.item);

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

  const [view, setView] = useState<"grid" | "map">("grid");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
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
    const view = searchParams.get("view");

    // Set the view state
    setView(view === "map" ? "map" : "grid");
  }, []);

  return (
    <>
      <div className=" flex justify-end gap-2 mx-5 lg:mx-10 mb-5 items-center">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="toggle toggle-base toggle-lg"
            onChange={toggleView}
            checked={view === "map" ? true : false}
          />

          <span
            className={`label-text ml-2 flex gap-1 ${
              view == "map" ? "text-primary" : "text-white"
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
          className={`flex-1 px-5 ${
            view === "map" ? "" : "container mx-auto "
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
