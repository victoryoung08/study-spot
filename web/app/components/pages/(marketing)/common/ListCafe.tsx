"use client";
import Image from "next/image";
import Link from "next/link";
import studySpot from "@/public/images/LOGO.png";
import studySpotVerified from "@/public/images/studyspotverifiedlogo.png";
import { Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { CafeProfileType } from "../../dashboard/profile/form/useCafeProfileForm";
import { UseFormSetValue } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
interface ListCafeProps {
  setupCafe?: boolean;
  setValue?: UseFormSetValue<CafeProfileType>;
}

export default function ListCafe({ setupCafe, setValue }: ListCafeProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [selectMembersip, SetSelectMembership] = useState<"Free" | "Paid">();

  const handleSelectMembership = (membershipType: "Free" | "Paid") => {
    SetSelectMembership(membershipType);
    toggleView(membershipType);
    if (setValue) {
      if (membershipType === "Free") {
        setValue("hasMembership", false);
      } else {
        setValue("hasMembership", true);
      }
    }
  };

  const [membership, setMembership] = useState<"Free" | "Paid">(
    (searchParams?.get("type") as "Free" | "Paid") || "Free"
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      // const params = new URLSearchParams(searchParams);
      const params = searchParams
        ? new URLSearchParams(searchParams)
        : undefined;

      params?.set(name, value);

      return params?.toString();
    },
    [searchParams]
  );

  const toggleView = (type: "Free" | "Paid") => {
    // Toggle the view state
    const newQuery = type === "Free" ? "Free" : "Paid";
    setMembership(newQuery);

    // router.push(pathname + "?" + createQueryString("type", newQuery));
    router.replace(pathname + "?" + createQueryString("type", newQuery));
  };

  useEffect(() => {
    // Get the view from the URL
    const type = searchParams?.get("type");

    // Set the view state
    setMembership(type === "Free" ? "Free" : "Paid");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="flex gap-10 justify-center">
        {signupOptions.map((item) => {
          return (
            <div
              key={item.id}
              className={`${
                setupCafe
                  ? "cursor-pointer hover:scale-105 transition-all ease-in-out delay-75 relative"
                  : "cursor-default"
              } border border-gray-500 rounded-3xl p-12 w-[450px]`}
              onClick={() => {
                if (setupCafe) {
                  handleSelectMembership(item.type as "Free" | "Paid");
                }
              }}
            >
              <div
                className={` ${
                  selectMembersip === item.type && setupCafe
                    ? "bg-primary/75 absolute  top-0 bottom-0 left-0 right-0 rounded-3xl flex justify-center items-center"
                    : "hidden"
                } `}
              >
                <Check className="w-20 h-20 " />
              </div>
              <div className="mb-8 h-20 flex items-center">
                <Image
                  src={item.image.src}
                  alt="Logo"
                  className="mx-auto"
                  width={item.image.width}
                  height={item.image.height}
                />
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
              <div className="space-y-2 min-h-[260px]">
                {item.benefits.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex gap-3 items-start text-left text-base font-light"
                    >
                      <Check className="w-5 h-5" />
                      <p>{item.description}</p>
                    </div>
                  );
                })}
              </div>
              {!setupCafe && (
                <div className="text-center">
                  <Link
                    href={item.ctaLink}
                    className="w-56 mx-auto btn border border-white btn-primary hover:bg-transparent hover:border-white transition-all delay-50 hover:scale-105 ease-in-out duration-500 text-white px-10 rounded-2xl capitalize"
                  >
                    {item.ctaText}
                  </Link>
                </div>
              )}
              {setupCafe && (
                <div className="text-center">
                  <Button
                    type="button"
                    className="w-56 mx-auto btn border border-white bg-primary hover:bg-primary hover:border-white  text-white px-10 rounded-2xl capitalize"
                  >
                    {item.ctaText}
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const signupOptions = [
  {
    id: 1,
    title: "Get a Free Listing With Us",
    type: "Free",
    image: {
      src: studySpot,
      height: 275,
      width: 170,
    },
    ctaLink: "/cafe/signup",
    ctaText: "Get Started Free",
    benefits: [
      { description: "Get Listed on our directory", id: 1 },
      { description: "Get a Marker on our Map App", id: 2 },
      { description: "Be exposed to 100k+ audience", id: 3 },
    ],
  },
  {
    id: 2,
    title: "Become a Verified Study Spot",
    type: "Paid",
    image: {
      src: studySpotVerified.src,
      height: 275,
      width: 275,
    },
    ctaLink: "",
    ctaText: "Get Started",
    benefits: [
      { description: "Everything in our Free Listing", id: 1 },
      { description: "Dedicated Cafe Profile Page", id: 2 },
      {
        description: "Use our App Feature to increase revenue and marketing",
        id: 3,
      },
      {
        description:
          "Get access to analytics like profile, website and social visits (and more)",
        id: 4,
      },
    ],
  },
];
