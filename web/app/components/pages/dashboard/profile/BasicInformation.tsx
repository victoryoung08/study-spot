"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import sampleImage from "@/public/images/become-contributor.png";
import useViewportWidth from "@/src/hooks/getViewportWidth";
import Image from "next/image";
import { useEffect, useState } from "react";
import { register } from "swiper/element";
import addImageIcon from "@/public/images/add-image.svg";
const images = [
  { id: 1, image: sampleImage, alt: "Sample Image" },
  { id: 2, image: sampleImage, alt: "Sample Image" },
  { id: 3, image: sampleImage, alt: "Sample Image" },
  { id: 4, image: sampleImage, alt: "Sample Image" },
];

export default function BasicInformation({ cafeData, setUpCafe }: any) {
  const [cafeName, setCafeName] = useState(true);
  const [cafeAddress, setcafeAddress] = useState(true);
  const [file, setFile] = useState({});

  const viewPortWidth = useViewportWidth();
  useEffect(() => {
    register();
  }, []);

  const editCafeName = () => {
    setCafeName((current) => !current);
  };
  const editCafeAddress = () => {
    setcafeAddress((current) => !current);
  };

  const handleInputChange = (event: any) => {
    setFile(event.target.files);
  };
  console.log(file);
  return (
    <div>
      <h2 className="text-4xl font-black">Profile</h2>
      <div className="mt-10 space-y-6">
        <div>
          <h3 className="text-xl font-bold">Basic Information</h3>
          <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
        </div>
        <div className="space-y-5">
          {setUpCafe && (
            <div>
              <div className="md:w-2/4 relative">
                <Button className="w-full h-56 bg-grey hover:bg-grey border-2 border-white rounded-2xl flex flex-col items-center">
                  <Image src={addImageIcon} alt="add image" className="w-14" />
                  <p className="text-xs mt-2">
                    Add image file (JPG or PNG) <br /> Recommended aspect
                    ration: <br />
                    (1080px X 1350px)
                  </p>
                </Button>
                <Input
                  type="file"
                  multiple
                  onChange={handleInputChange}
                  className=" absolute top-0 opacity-0 h-full cursor-pointer"
                />
              </div>
            </div>
          )}
          {!setUpCafe && (
            <>
              <div className="hidden md:flex gap-5">
                {cafeData?.images?.map((item: any) => {
                  return (
                    <div key={item.id} className="w-64 h-64">
                      <Image
                        src={item.url}
                        width={250}
                        height={250}
                        alt={item.alternativeText || "Image"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="block md:hidden">
                {viewPortWidth && viewPortWidth < 900 && images.length > 2 && (
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
                    {setUpCafe &&
                      cafeData?.images?.map((img: any) => {
                        return (
                          <swiper-slide key={img.id}>
                            <Image
                              src={img.url}
                              width={150}
                              height={150}
                              className="h-full sm:h-[250px] w-full sm:w-[330px] object-cover"
                              alt={img.alternativeText || "Image"}
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
            </>
          )}
        </div>

        <div>
          <p>Cafe Name</p>
          {cafeName && !setUpCafe ? (
            <div className="mt-2 xs:pl-5 flex items-center md:w-2/4 justify-between text-sm">
              {cafeData && <p>{cafeData?.cafe_name || ""}</p>}
              <Button
                onClick={editCafeName}
                className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
              >
                Edit
              </Button>
            </div>
          ) : (
            <div className="mt-2  flex justify-between items-center  md:w-2/4 ">
              <Input
                type="text"
                //   {...register("cafe_name")}
                placeholder="Cafe Name"
                defaultValue={cafeData?.cafe_name || ""}
                className="focus-visible:ring-0 px-5 focus-visible:ring-offset-0 md:w-2/4 rounded-2xl border-2 border-white text-sm bg-[#3a3939] "
              />
              {!setUpCafe && (
                <Button
                  onClick={editCafeName}
                  className="border-2  bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
                >
                  Save
                </Button>
              )}
            </div>
          )}
        </div>

        <div>
          <p>Cafe Address</p>
          {cafeAddress && !setUpCafe ? (
            <div className="mt-2 xs:pl-5 flex items-center md:w-2/4 justify-between text-sm">
              {cafeData && <p>{cafeData?.location || ""}</p>}
              <Button
                onClick={editCafeAddress}
                className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
              >
                Edit
              </Button>
            </div>
          ) : (
            <div className="mt-2  flex justify-between items-center md:w-2/4 ">
              <Input
                type="text"
                //   {...register("cafe_name")}
                placeholder="Cafe Location"
                defaultValue={cafeData?.location || ""}
                className="focus-visible:ring-0 px-5 focus-visible:ring-offset-0 md:w-2/4 rounded-2xl border-2 border-white text-sm bg-[#3a3939] "
              />
              {!setUpCafe && (
                <Button
                  onClick={editCafeAddress}
                  className="border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36"
                >
                  Save
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
