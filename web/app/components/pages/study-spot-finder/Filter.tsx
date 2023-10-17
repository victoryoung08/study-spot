"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

type FilterProps = {
  features: any;
  vibes: any;
  styles: any;
  selectedTags: string[];
  setSelectedTags: any;
};

export default function Filter({
  features,
  vibes,
  styles,
  selectedTags,
  setSelectedTags,
}: FilterProps) {
  const handleTagClick = (tag: string) => {
    setSelectedTags((prevSelectedTags: any) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((item: any) => item !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  return (
    <div className="md:border border-white md:rounded-3xl py-8 px-5 md:p-4 bg-[#252525] flex flex-row md:flex-col gap-3 overflow-y-auto no-scrollbar">
      {features && (
        <div className="flex flex-row md:grid grid-cols-2 gap-3">
          {features.map((item: any) => {
            return (
              <button
                onClick={() => handleTagClick(item)}
                key={item.item}
                className={`border border-white flex flex-col justify-center items-center p-3 rounded-xl h-20 w-20 md:h-auto md:w-auto ${
                  selectedTags.includes(item) ? "bg-primary" : ""
                }`}
              >
                <Image
                  width={24}
                  height={24}
                  src={item.svg_icon.data.attributes.url}
                  alt={item.item}
                  className="w-6 h-6"
                />
                <span className="text-sm">{item.item}</span>
              </button>
            );
          })}
        </div>
      )}

      {vibes && (
        <div className="md:mt-5">
          <h2 className="hidden md:flex mb-2 text-base font-medium">Vibe</h2>
          <div className="flex flex-row md:grid grid-cols-2 gap-3">
            {vibes.map((item: any) => {
              return (
                <button
                  onClick={() => handleTagClick(item)}
                  key={item.item}
                  className={`border border-white flex flex-col justify-center items-center p-3 rounded-xl h-20 w-20 md:h-auto md:w-auto ${
                    selectedTags.includes(item) ? "bg-primary" : ""
                  }`}
                >
                  <Image
                    width={24}
                    height={24}
                    src={item.svg_icon.data.attributes.url}
                    alt={item.item}
                    className="w-6 h-6"
                  />
                  <span className="text-sm">{item.item}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {styles && (
        <div className="md:mt-5">
          <h2 className="hidden md:flex mb-2 text-base font-medium">Styles</h2>
          <div className="flex flex-row md:grid grid-cols-2 gap-3">
            {styles.map((item: any) => {
              return (
                <button
                  onClick={() => handleTagClick(item)}
                  key={item.item}
                  className={`border border-white flex flex-col justify-center items-center p-3 rounded-xl h-20 w-20 md:h-auto md:w-auto ${
                    selectedTags.includes(item) ? "bg-primary" : ""
                  }`}
                >
                  <Image
                    width={24}
                    height={24}
                    src={item.svg_icon.data.attributes.url}
                    alt={item.item}
                    className="w-6 h-6"
                  />
                  <span className="text-sm">{item.item}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
