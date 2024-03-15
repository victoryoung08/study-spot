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
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"] as string;
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buf,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET || ""
      );

      const session = event.data.object as Stripe.Checkout.Session;

      if (!session?.metadata?.userId) {
        return res.status(200).end();
      }

      if (event.type === "checkout.session.completed") {
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

        console.log(data);
        await updateMembership(
          session.metadata.cafeId,
          session.metadata.userId,
          data
        );
      }
    } catch (err) {
      let message = "Unknown Error";
      if (err instanceof Error) message = err.message;
      res.status(400).send(`Webhook Error: ${message}`);
      return;
    }

    res.status(200).json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default webhook;
