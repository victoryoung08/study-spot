"use client";

import Image from "next/image";
import { Container } from "../../common/Container";
import pinIcon from "@/public/images/pin.svg";
import { register } from "swiper/element/bundle";
import { useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function HeaderWithGridImage({
  title,
  location,
  images,
  item,
}: any) {
  useEffect(() => {
    register();
  }, []);
  return (
    <Container>
      <div className="">
        <button className="w-8 h-8 mb-5" onClick={() => history.back()}>
          <ArrowLeftIcon />
        </button>
        <h2 className="mt-5 text-4xl font-semibold leading-tight lg:mt-0 lg:text-left lg:text-5xl mb-2">
          {title || ""}
        </h2>
        {location && (
          <div className="flex my-5">
            <Image src={pinIcon} alt="Location Icon" />
            <p className="text-base">{location || ""}</p>
          </div>
        )}
        <div>
          {images.data.length === 1 && (
            <Image
              src={images?.data[0].attributes?.url}
              width={200}
              height={200}
              className="w-3/5 mx-auto"
              alt={images?.data[0].attributes?.alternativeText || "Image"}
            />
          )}
          {images.data.length === 2 && (
            <div className="grid grid-cols-2 gap-2">
              {images?.data.map((img: any) => {
                return (
                  <Image
                    key={img.id}
                    src={images?.data[0].attributes?.url}
                    width={200}
                    height={200}
                    className="h-full w-full"
                    alt={images?.data[0].attributes?.alternativeText || "Image"}
                  />
                );
              })}
            </div>
          )}

          {images.data.length > 2 && (
            <swiper-container
              speed={500}
              autoplay={true}
              loop={true}
              slides-per-view="3"
            >
              {images.data.map((img: any) => {
                return (
                  <swiper-slide key={img.id}>
                    <Image
                      src={img?.attributes?.url}
                      width={200}
                      height={200}
                      className="h-[250px] w-[330px]"
                      alt={
                        img?.image?.data?.attributes?.alternativeText || "Image"
                      }
                    />
                  </swiper-slide>
                );
              })}
            </swiper-container>
          )}
        </div>
      </div>
    </Container>
  );
}
