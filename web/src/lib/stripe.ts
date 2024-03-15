import Stripe from "stripe";
// it works here but when i use it as api key in new Stripe, it doesn't
// console.log("process.env.STRIPE_SECRET_KEY", process.env.STRIPE_SECRET_KEY);
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2023-10-16",
  typescript: true,
});
