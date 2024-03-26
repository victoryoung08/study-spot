import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";
import { stripe } from "@/src/lib/stripe";
import updateMembership from "@/src/queries/updateMembership";

export const config = {
  api: {
    bodyParser: false,
  },
};

const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const buf = await buffer(req);
      const sig = req.headers["stripe-signature"] as string;

      const event = stripe.webhooks.constructEvent(
        buf,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET || ""
      );
      const session = event.data.object as Stripe.Checkout.Session;
      if (!session?.metadata?.userId) {
        return res.status(200).end();
      }

      // Retrieve the accesstoken from Stripe.
      const accessToken = session.metadata.access;
      // console.log("event.type", event.type);

      if (event.type === "checkout.session.completed") {
        // Retrieve the subscription details from Stripe.
        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string
        );
        const data = {
          stripeSubscriptionID: subscription.id,
          stripeCustomerID: subscription.customer as string,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        };

        await updateMembership(
          session.metadata.cafeId,
          session.metadata.userId,
          accessToken,
          true,
          data
        );
      }
      if (event.type === "invoice.payment_succeeded") {
        // Retrieve the subscription details from Stripe.
        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string
        );
        const data = {
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        };
        await updateMembership(
          session.metadata.cafeId,
          session.metadata.userId,
          accessToken,
          true,
          data
        );
      }
      if (event.type === "customer.subscription.deleted") {
        const data = {
          stripeSubscriptionID: null,
          stripeCustomerID: null,
          stripeCurrentPeriodEnd: null,
        };
        await updateMembership(
          session.metadata.cafeId,
          session.metadata.userId,
          accessToken,
          false,
          data
        );
      }
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error("Error handling webhook event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default webhook;
