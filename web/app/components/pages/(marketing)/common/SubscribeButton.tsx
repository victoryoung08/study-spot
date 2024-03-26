import { Button } from "@/app/components/ui/button";
import { manageStripeSubscriptionAction } from "@/src/helper/manageStripeAction";
import getCafeDetails from "@/src/queries/getCafeDetails";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";

interface ManageStripeSubscriptionActionProps {
  isSubscribed: boolean;
  stripeCustomerId?: string | null;
  email: string;
  userId: string;
  access: string;
  buttonText: string;
}

export default function SubscribeButton({
  isSubscribed,
  stripeCustomerId,
  email,
  access,
  userId,
  buttonText,
}: ManageStripeSubscriptionActionProps) {
  const [isPending, startTransition] = useTransition();
  const handleSubscription = () => {
    startTransition(async () => {
      const cafe = await getCafeDetails();
      const subscriptionData = {
        isSubscribed: isSubscribed,
        stripeCustomerId: stripeCustomerId,
        email: email,
        userId: userId,
        cafeId: cafe?.cafeDetails?.id,
        access: access,
      };

      try {
        const response = await manageStripeSubscriptionAction(subscriptionData);
        if (response.url) {
          window.location.href = response.url;
          // window.location.href = response.url ?? "/dashboard/billing";
        }
      } catch (error) {
        console.error("Error managing subscription:", error);
      }
    });
  };

  return (
    <div className="flex justify-center">
      <Button
        onClick={handleSubscription}
        type="button"
        className={`${
          buttonText === "Yes"
            ? "w-24 border-2 border-white rounded-2xl bg-primary hover:bg-transparent text-white font-semibold"
            : "w-56 mx-auto btn border border-white bg-primary hover:bg-primary hover:border-white  text-white px-10 rounded-2xl capitalize"
        }`}
      >
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {buttonText}
      </Button>
    </div>
  );
}
