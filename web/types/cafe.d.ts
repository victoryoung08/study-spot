import { string } from "zod";

export interface CafeFormTypes {
  cafeData?: CafeData;
  setUpCafe?: boolean;
  placeholder?: string;
  handleInputChange?: any;
  inputValue?: string | number | boolean | any;
  control?: Control<CafeProfileType>;
  name?: string;
  isSelect?: { [key: string]: boolean };
  isChecked?: boolean;
  cafeOwner?: cafeOwner;
}

export interface cafeOwner {
  name: string;
  email: string;
  contact_number: string;
}
export interface CafeData {
  id?: number;
  images?: [];
  cafe_name?: string;
  location?: string;
  suburb?: string;
  Longitude?: number;
  Latitute?: number;
  quietness?: number;
  features?: string[]; // Assuming features, vibes, and styles are arrays of strings
  vibes?: string[];
  styles?: string[];
  discount?: string;
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  hasMembership?: boolean;
}

export interface CafeDefaultValues {
  cafe_name: string;
  location: string;
  suburb: string;
  Longitude: number;
  Latitute: number;
  quietness: number;
  hasCharging: boolean;
  hasWifi: boolean;
  isChill: boolean;
  isFast: boolean;
  isCozy: boolean;
  isUpbeat: boolean;
  isMinimal: boolean;
  isNature: boolean;
  isArtistic: boolean;
  isVintage: boolean;
  discount: string;
  tiktok: string;
  facebook: string;
  instagram: string;
  hasMembership?: boolean;

  // Add other properties as needed
}
