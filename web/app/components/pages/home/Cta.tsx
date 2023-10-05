import Image from "next/image";

import ctaImg from "@/public/images/become-contributor.png";
import { Container } from "../../common/Container";

export default function Cta() {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Image
            src={ctaImg}
            alt="cta Image"
            className="mx-auto h-96 w-96 lg:h-auto lg:w-auto"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="mt-5 text-2xl font-semibold leading-tight lg:mt-0 lg:text-left lg:text-3xl">
            Become a contributor ✨
          </h2>
          <p className="mt-5 lg:mt-10 mb-5 text-sm lg:text-base">
            Share your favourite study spots to support your cafe!
          </p>
          <p className="text-sm lg:text-base">
            You&apos;ll also be in the draw to win a few freebies from us 🎁
          </p>
          <button
            type="button"
            className="mt-5 lg:mt-10 btn bg-[#505050] hover:bg-primary rounded-xl text-white border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
          >
            Let us know & Sign up
          </button>
        </div>
      </div>
    </Container>
  );
}
