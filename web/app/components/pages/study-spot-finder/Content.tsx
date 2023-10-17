"use client";
import { useState } from "react";
import Cafe from "./Cafe";
import Filter from "./Filter";

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
    <div className="lg:mx-10 flex gap-5 lg:gap-10 relative">
      <div className="w-full md:w-72 fixed bottom-0 md:relative">
        <Filter
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          features={features}
          vibes={vibes}
          styles={styles}
        />
      </div>
      <div className="mx-5 lg:mx-0 flex-1">
        <Cafe cafe={filteredCafe} />
      </div>
    </div>
  );
}
