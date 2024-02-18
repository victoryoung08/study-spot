import { create } from "zustand";

type imageType = {
  images: Array<File>;
  addImage: (state: Array<File>) => void;
  removeImage: (index: number) => void;
};

export const useCreateImage = create<imageType>((set) => ({
  images: [],

  // setImage: (imageFile) => {
  //   return set((state) => {
  //     return {
  //       images: [...state.images, ...imageFile],
  //     };
  //   });
  // },

  addImage: (imageFile: File[]) =>
    set((state) => ({ images: [...state.images, ...imageFile] })),

  removeImage: (index: number) => {
    set((state) => ({
      images: state.images.filter((_, i) => i !== index),
    }));
  },
}));
