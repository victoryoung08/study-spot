import { create } from "zustand";

type imageType = {
  images: Array<File>;
  setImage: (state: Array<File>) => void;
};

export const useCreateImage = create<imageType>((set) => ({
  images: [],

  setImage: (imageFile) => {
    return set((state) => {
      return {
        images: [...state.images, ...imageFile],
      };
    });
  },
}));
