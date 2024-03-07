import { Container } from "@/app/components/common/Container";
import ListCafe from "@/app/components/pages/(marketing)/common/ListCafe";
export default function Cafe() {
  return (
    <Container>
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold mb-3">Fill out your quiet times.</h2>
        <p>Connect with 1000s of Students & Remote workers.</p>
      </div>
      <ListCafe />
    </Container>
  );
}
