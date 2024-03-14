interface FeaturesProps {
  handleWifiCheckbox: (name: string) => void;
  handleChargingCheckbox: (name: string) => void;
}

export interface cafeFeaturesType {
  id: number;
  title: string;
  features: featuresType[];
}

export interface featuresType {
  placeholder: string;
  name: string;
  handler: any;
}

const features = ({
  handleWifiCheckbox,
  handleChargingCheckbox,
}: FeaturesProps) => {
  const cafeFeatures = [
    {
      id: 1,
      title: "What best describes your cafe?",
      features: [
        {
          placeholder: "Chill",
          name: "isChill",
          handler: () => {},
        },
        {
          placeholder: "Cozy",
          name: "isCozy",
          handler: () => {},
        },
        {
          placeholder: "Fast",
          name: "isFast",
          handler: () => {},
        },
        {
          placeholder: "Upbeat",
          name: "isUpbeat",
          handler: () => {},
        },
      ],
    },
    {
      id: 2,
      title: "Do you have Wi-Fi?",
      features: [
        {
          placeholder: "Yes",
          name: "hasWifi",
          handler: handleWifiCheckbox("hasWifi"),
        },
        {
          placeholder: "No",
          name: "",
          handler: handleWifiCheckbox("hasNoWifi"),
        },
      ],
    },
    {
      id: 3,
      title: "Do you have Charging?",
      features: [
        {
          placeholder: "Yes",
          name: "hasCharging",
          handler: handleChargingCheckbox("hasCharging"),
        },
        {
          placeholder: "No",
          name: "",
          handler: handleChargingCheckbox("hasNoCharging"),
        },
      ],
    },
    {
      id: 4,
      title: "What style is your cafe?",
      features: [
        {
          placeholder: "Minimal",
          name: "isMinimal",
          handler: () => {},
        },
        {
          placeholder: "Artistic",
          name: "isArtistic",
          handler: () => {},
        },
        {
          placeholder: "Nature",
          name: "isNature",
          handler: () => {},
        },
        {
          placeholder: "Vintage",
          name: "isVintage",
          handler: () => {},
        },
      ],
    },
  ];
  return cafeFeatures;
};

export default features;
