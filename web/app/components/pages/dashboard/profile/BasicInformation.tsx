"use client";

import { Button } from "@/app/components/ui/button";
import sampleImage from "@/public/images/become-contributor.png";
import useViewportWidth from "@/src/hooks/getViewportWidth";
import Image from "next/image";
import { useEffect } from "react";
import { register } from "swiper/element";

const images = [
  { id: 1, image: sampleImage, alt: "Sample Image" },
  { id: 2, image: sampleImage, alt: "Sample Image" },
  { id: 3, image: sampleImage, alt: "Sample Image" },
  { id: 4, image: sampleImage, alt: "Sample Image" },
];

export default function BasicInformation({ cafeDetails }: any) {
  const viewPortWidth = useViewportWidth();
  useEffect(() => {
    register();
  }, []);
  return (
    <div>
      <h2 className="text-4xl font-black">Profile</h2>
      <div className="mt-10 space-y-6">
        <div>
          <h3 className="text-xl font-bold">Basic Information</h3>
          <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
        </div>
        <div className="space-y-5">
          <div className="hidden md:flex gap-5">
            {images.map((item) => {
              return (
                <div key={item.id} className="w-64 h-auto">
                  <Image src={item.image} alt={item.alt} />
                </div>
              );
            })}
          </div>
          <div className="block md:hidden">
            {images.length > 2 && (
              <swiper-container
                speed={500}
                autoplay={true}
                loop={true}
                slides-per-view={
                  viewPortWidth && viewPortWidth > 700
                    ? 2
                    : viewPortWidth && viewPortWidth > 576
                    ? 1
                    : 1
                }
              >
                {images.map((img: any) => {
                  return (
                    <swiper-slide key={img.id}>
                      <Image
                        src={img.image}
                        width={200}
                        height={200}
                        className="h-full sm:h-[250px] w-full sm:w-[330px]"
                        alt={img.alt || "Image"}
                      />
                    </swiper-slide>
                  );
                })}
              </swiper-container>
            )}
          </div>

          <Button className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36">
            Edit
          </Button>
        </div>

        <div>
          <p>Cafe Name</p>
          <div className="mt-1 xs:mt-0 xs:ml-5 flex items-center md:w-2/4 justify-between">
            {cafeDetails && <p>{cafeDetails?.cafe_name || ""}</p>}
            <Button className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36">
              Edit
            </Button>
          </div>
        </div>

        <div>
          <p>Cafe Address</p>
          <div className="mt-1 xs:mt-0 xs:ml-5 flex items-center md:w-2/4 justify-between">
            {cafeDetails && <p>{cafeDetails?.location || ""}</p>}
            <Button className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36">
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
