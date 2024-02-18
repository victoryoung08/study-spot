import { CafeData } from "@/types/cafe";
import { create } from "zustand";

type cafeType = {
  cafe: CafeData | null;
  setCafe: (state: CafeData) => void;
};

export const useCafeData = create<cafeType>((set) => ({
  cafe: [],

  //   setCafe: (cafeData) => {
  //     return set((state) => {
  //       return {
  //         cafe: [...state.cafe, ...cafeData],
  //       };
  //     });
  //   },
  setCafe: (cafeData) => {
    return set(() => ({ cafe: cafeData })); // Update the state to set the new cafeData object
  },
}));
