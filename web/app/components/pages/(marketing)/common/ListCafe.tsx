"use client";
import Image from "next/image";
import Link from "next/link";
import studySpot from "@/public/images/LOGO.png";
import studySpotVerified from "@/public/images/studyspotverifiedlogo.png";
import { Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { getUserSubscriptionPlan } from "@/src/lib/subscription";
import { useEffect, useState } from "react";
import SubscribeButton from "./SubscribeButton";
import getSession from "@/src/helper/getSession";
interface ListCafeProps {
  setupCafe?: boolean;
}

export interface subscriptionType {
  stripeSubscriptionId: string;
  stripeCurrentPeriodEnd: Date;
  stripeCustomerId: string;
  isSubscribed: any;
  isCanceled: boolean;
}

export default function ListCafe({ setupCafe }: ListCafeProps) {
  const [subscriptionPlan, setSubscriptionPlan] = useState<subscriptionType>();
  const { session } = getSession();

  useEffect(() => {
    async function getSubscription() {
      try {
        const plan = await getUserSubscriptionPlan(); // Using await here
        setSubscriptionPlan(plan);
      } catch (error) {
        console.error("Error fetching user subscription plan:", error);
      }
    }

    getSubscription();
  }, []); // Empty dependency array to only run once on component mount
  return (
    <div>
      <div className="flex gap-10 justify-center">
        {signupOptions.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-gray-500 rounded-3xl p-12 w-[450px]"
            >
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
                    href={setupCafe ? "" : item.ctaLink}
                    className="w-56 mx-auto btn border border-white btn-primary hover:bg-transparent hover:border-white transition-all delay-50 hover:scale-105 ease-in-out duration-500 text-white px-10 rounded-2xl capitalize"
                  >
                    {item.ctaText}
                  </Link>
                </div>
              )}
              {setupCafe && session && item.type != "Free" ? (
                <SubscribeButton
                  buttonText="Get Started"
                  userId={session?.user?.id}
                  email={session?.user?.email}
                  isSubscribed={subscriptionPlan?.isSubscribed}
                  stripeCustomerId={subscriptionPlan?.stripeCustomerId}
                  access={session?.user?.access}
                />
              ) : (
                <div className="text-center">
                  <Link href="/dashboard/profile">
                    <Button
                      type="button"
                      className="w-56 mx-auto btn border border-white bg-primary hover:bg-primary hover:border-white  text-white px-10 rounded-2xl capitalize"
                    >
                      {item.ctaText}
                    </Button>
                  </Link>
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
