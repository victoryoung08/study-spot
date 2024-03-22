import { Container } from "@/app/components/common/Container";
import SetupForm from "@/app/components/pages/dashboard/common/setupCafe/SetupForm";
import getSession from "@/src/helper/getSession";
import getCafeDetails from "@/src/queries/getCafeDetails";
import getUserDetails from "@/src/queries/getUserDetails";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

export default async function setupCafe() {
  const cafeData = await getCafeDetails();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  if (cafeData) {
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
