"use server";

import getUserDetails from "../queries/getUserDetails";
import { stripe } from "./stripe";

export async function getUserSubscriptionPlan() {
  const user = await getUserDetails();

  if (!user?.userData) {
    throw new Error("User not found.");
  }
  const stripeCurrentPeriodEnd = new Date(
    user?.userData?.stripeCurrentPeriodEnd
  );

  const isSubscribed =
    user?.userData?.stripeSubscriptionID &&
    user?.userData?.stripeCurrentPeriodEnd &&
    stripeCurrentPeriodEnd.getTime() + 86_400_000 > Date.now(); // user?.userData?.stripeCurrentPeriodEnd.getTime() + 86_400_000 > Date.now();

  let isCanceled = false;
  if (isSubscribed && user.userData.stripeSubscriptionID) {
    const stripePlan = await stripe.subscriptions.retrieve(
      user.userData.stripeSubscriptionID
    );
    isCanceled = stripePlan.cancel_at_period_end;
  }

  return {
    stripeSubscriptionId: user?.userData?.stripeSubscriptionID,
    stripeCurrentPeriodEnd: user?.userData?.stripeCurrentPeriodEnd,
    stripeCustomerId: user.userData.stripeCustomerID,
    isSubscribed,
    isCanceled,
  };
}
