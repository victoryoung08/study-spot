import useViewportWidth from "@/src/hooks/getViewportWidth";
import Image from "next/image";
import { useEffect, useState } from "react";
import { register } from "swiper/element";
import sampleImage from "@/public/images/become-contributor.png";

import addImageIcon from "@/public/images/add-image.svg";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

import useCafeProfileForm from "./form/useCafeProfileForm";
import ImagePreview from "./ImagePreview";
import { useCreateImage } from "@/app/store/imageUpload";
import { useCafeData } from "@/app/store/cafeData";

export default function CafeImages({ setUpCafe }: any) {
  const cafeData = useCafeData((state) => state.cafe);

  const [images, setImages] = useState<File[]>([]);
  const setImage = useCreateImage((state) => state.setImage);

  const viewPortWidth = useViewportWidth();
  useEffect(() => {
    register();
  }, []);

  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // convert `FileList` to `File[]`
      const files = Array.from(e.target.files);
      setImages(files);
      setImage(files);
    }
  };

  return (
    <div className="space-y-5">
      {setUpCafe && (
        <div>
          <div className="md:w-2/4 relative">
            {images.length === 0 && (
              <>
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
                  accept="image/*"
                  onChange={handleFileSelected}
                  className=" absolute top-0 opacity-0 h-full cursor-pointer"
                />
              </>
            )}

            <ImagePreview images={images} />
            {images.length > 0 && (
              <div className="flex gap-5">
                <Button className="mt-2 border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36">
                  Add Image
                </Button>
                <Button className="mt-2 border-2 bg-primary hover:bg-primary rounded-2xl w-24 h-8 xs:h-auto xs:w-36">
                  Delete Image
                </Button>
              </div>
            )}
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
  );
}
