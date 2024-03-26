import ModalWrapper from "@/app/components/common/ModalWrapper";
import { Button } from "@/app/components/ui/button";
import { DialogClose } from "@/app/components/ui/dialog";
import SubscribeButton from "../../(marketing)/common/SubscribeButton";
import { useEffect, useState } from "react";
import { subscriptionType } from "../../(marketing)/common/ListCafe";
import getSession from "@/src/helper/getSession";
import { getUserSubscriptionPlan } from "@/src/lib/subscription";

export default function CancelSubscription() {
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
    <ModalWrapper
      ButtonTrigger={
        <Button className="w-full sm:w-52 py-5 bg-primary hover:bg-primary border-2 border-white rounded-2xl">
          Cancel Subscription
        </Button>
      }
    >
      <div className="text-center">
        <div className="mx-auto">
          <h2 className="font-semibold text-3xl mb-5">Cancel Subscription</h2>
        </div>
        <p className="mt-4 text-sm">
          Do you really want to cancel your subscription?
        </p>
      </div>
      <div className="flex justify-center gap-5 ">
        {session && (
          <SubscribeButton
            buttonText="Yes"
            userId={session?.user?.id}
            email={session?.user?.email}
            isSubscribed={subscriptionPlan?.isSubscribed}
            stripeCustomerId={subscriptionPlan?.stripeCustomerId}
            access={session?.user?.access}
          />
        )}
        <DialogClose asChild>
          <Button className="w-24 border-2 border-white rounded-2xl bg-primary hover:bg-transparent text-white font-semibold">
            No
          </Button>
        </DialogClose>
      </div>
    </ModalWrapper>
  );
}
