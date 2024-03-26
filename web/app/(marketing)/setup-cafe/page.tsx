import { Container } from "@/app/components/common/Container";
import SetupForm from "@/app/components/pages/dashboard/common/setupCafe/SetupForm";
import getCafeDetails from "@/src/queries/getCafeDetails";
import { redirect } from "next/navigation";

export default async function setupCafe() {
  const cafeData = await getCafeDetails();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (cafeData?.cafeDetails != null) {
    redirect("dashboard/profile");
    // add error page here
  }
  return (
    <Container>
      <div>
        <SetupForm />
      </div>
    </Container>
  );
}
