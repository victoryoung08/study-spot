"use client";
import { useState } from "react";
import Cafe from "./Cafe";
import Filter from "./Filter";
import MapView from "./Map";

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

  return (
    <div className="mx-5 lg:mx-10 flex gap-5 lg:gap-10">
      <div className="hidden md:block w-72">
        <Filter
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          features={features}
          vibes={vibes}
          styles={styles}
        />
      </div>
      <div className="flex-1 h-screen ">
        <Cafe cafe={filteredCafe} />
        {/* <MapView cafe={filteredCafe} /> */}
      </div>
    </div>
  );
}
