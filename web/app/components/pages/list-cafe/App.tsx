import Image from "next/image";
import { Container } from "../../common/Container";
import appImage from "@/public/images/app.webp";
export default function App() {
  return (
    <Container>
      <div className="lg:py-20 text-center">
        <h2 className="text-4xl font-bold leading-snug text-white md:text-5xl lg:text-6xl lg:w-3/4 mx-auto">
          Study Spot is an app that
          <span className="text-primary">connects</span> your cafe with students
          & remote workers
        </h2>
        <div className="mt-10 w-2/4 relative mx-auto">
          <Image
            src={appImage}
            alt="app Image"
            className="rounded-2xl w-full"
          />
          <div className="bg-gradient-to-t from-[#181818] h-56 w-full right-0 left-0 bottom-0 absolute "></div>
        </div>
      </div>
    </Container>
  );
}
