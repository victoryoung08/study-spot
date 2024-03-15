// fix the typings!!
export async function manageStripeSubscriptionAction(data: any) {
  try {
    const response = await fetch("/api/manageStripeSubscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error calling manageStripeSubscription API:", error);
    throw error;
  }
}
