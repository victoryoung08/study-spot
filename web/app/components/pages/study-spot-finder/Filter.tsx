"use client";

import wifi from "@/public/images/wifi.svg";
import charging from "@/public/images/charging.svg";
import chill from "@/public/images/chill.svg";
import cozy from "@/public/images/cozy.svg";
import fast from "@/public/images/fast.svg";
import upbeat from "@/public/images/upbeat.svg";
import minimal from "@/public/images/minimal.svg";
import earthy from "@/public/images/earthy.svg";
import vintage from "@/public/images/vintage.svg";
import artistic from "@/public/images/artistic.svg";
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
    <div className="border border-white rounded-3xl p-4 bg-[#252525]">
      <div className="grid grid-cols-2 gap-3">
        {features.map((item: any) => {
          return (
            <button
              onClick={() => handleTagClick(item)}
              key={item.item}
              className={`border border-white flex flex-col justify-center items-center p-3 rounded-xl ${
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

      <div className="mt-5">
        <h2 className="mb-2 text-base font-medium">Vibe</h2>
        <div className="grid grid-cols-2 gap-3">
          {vibes.map((item: any) => {
            return (
              <button
                onClick={() => handleTagClick(item)}
                key={item.item}
                className={`border border-white flex flex-col justify-center items-center p-3 rounded-xl ${
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

      <div className="mt-5">
        <h2 className="mb-2 text-base font-medium">Style</h2>
        <div className="grid grid-cols-2 gap-3">
          {styles.map((item: any) => {
            return (
              <button
                onClick={() => handleTagClick(item)}
                key={item.item}
                className={`border border-white flex flex-col justify-center items-center p-3 rounded-xl ${
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
    </div>
  );
}
