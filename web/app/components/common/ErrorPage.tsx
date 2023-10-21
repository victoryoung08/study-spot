import { Container } from "./Container";

export default function ErrorPage() {
    return (
      <Container>
        <div className="py-32 text-center">
          <h2 className="text-6xl font-semibold">Page not found</h2>
          <p className="mt-5">There was an error accessing the page.</p>
        </div>
      </Container>
    );
}