import React from "react";
import Image from "next/image";
import { useCreateImage } from "@/app/store/imageUpload";
import { X } from "lucide-react";

type Props = {
  images: File[];
};

const ImagePreview = ({ images }: Props) => {
  const removeImage = useCreateImage((state) => state.removeImage);

  const handleImageClick = (index: number) => {
    removeImage(index);
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 my-2">
        {images.map((image, index) => {
          const src = URL.createObjectURL(image);
          return (
            <div className="relative aspect-video" key={index}>
              <div className="absolute z-50 w-full h-full bg-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition-all ease-in-out delay-100 duration-500">
                <div
                  className="h-12 w-12 bg-primary/80 rounded-full flex justify-center items-center cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <X />
                </div>
              </div>

              <Image src={src} alt={image.name} className="object-cover" fill />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagePreview;
