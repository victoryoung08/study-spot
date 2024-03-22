"use server";

import { stripe } from "@/src/lib/stripe";
import { absoluteUrl } from "@/src/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function manageStripeSubscription(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { isSubscribed, stripeCustomerId, email, userId, cafeId, access } =
    req.body;
  const billingUrl = absoluteUrl("/dashboard/profile");

  try {
    if (isSubscribed && stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: stripeCustomerId,
        return_url: billingUrl,
      });
      return res.status(200).json({ url: stripeSession.url });
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: billingUrl,
      cancel_url: billingUrl,
      payment_method_types: ["card", "link"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: email,
      line_items: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      metadata: {
        userId: userId,
        cafeId: cafeId,
        access: access,
      },
    });

    return res.status(200).json({ url: stripeSession.url });
  } catch (error) {
    console.error("Error processing subscription:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
