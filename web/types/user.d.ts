export type User = {
  id: string;
  email: string;
  username: string;
  name: string;
  contact_number: string;
  confirmed: boolean;
  updatedAt: string;
  stripeCustomerID: string;
  stripeSubscriptionID: string;
  stripeCurrentPeriodEnd: Date;
};
