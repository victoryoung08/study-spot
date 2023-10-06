import Link from "next/link";
import { Container } from "../../common/Container";
import thumbnail1 from "@/public/images/thumbnail1.webp";
import thumbnail2 from "@/public/images/thumbnail2.webp";
import thumbnail3 from "@/public/images/thumbnail3.webp";
import Image from "next/image";

const benefits = [
  { id: 1, title: "Get 50% off your 1st 3-months Listing Fees ($50/month)" },
  { id: 2, title: "3x Social Media Content / Month for the 1st 3-months" },
  {
    id: 3,
    title:
      "Secure Lifetime Early Study Spot Pricing at $100/month after 3-months",
  },
];

const vids = [
  { id: 1, thumbnail: thumbnail1, link: "https://youtube.com" },
  { id: 2, thumbnail: thumbnail2, link: "https://youtube.com" },
  { id: 3, thumbnail: thumbnail3, link: "https://youtube.com" },
];

export default function Form() {
  return (
    <Container>
      <div className="text-center lg:py-20">
        <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
          Become an <span className="text-primary">Early Study Spot Cafe </span>
          for lifetime foundational rates
        </h2>

        <div className="mt-10">
          <h3 className="font-bold text-xl lg:text-2xl">
            As a thank you for being the first 25 Study Spots, you&apos;ll
            receive:
          </h3>
          <div className="mt-3 space-y-3">
            {benefits.map((item) => {
              return (
                <p
                  key={item.id}
                  className="border-b border-gray-500 w-3/4 md:w-4/6 mx-auto"
                >
                  {item.title}
                </p>
              );
            })}
          </div>
          <h4 className="lg:w-3/4 mx-auto mt-10 font-semibold text-lg lg:text-xl">
            Listing Fees will increase once we&apos;ve reached 25 Study Spots.
            Early Study Spots will retain foundational rates.
          </h4>
          <div className="mt-20">
            <form action="" className="w-3/4 lg:w-2/5 mx-auto">
              <input
                type="text"
                placeholder="Your First Name"
                className="input input-bordered w-full rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
              />
              <input
                type="text"
                placeholder="Your Cafe Name"
                className="input input-bordered w-full my-5 rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
              />
              <input
                type="text"
                placeholder="Your best Name"
                className="input input-bordered w-full rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
              />
              <input
                type="text"
                placeholder="Your best contact number"
                className="input input-bordered w-full mt-5 rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
              />
              <button className="mt-10 btn btn-primary capitalize font-normal border-white hover:border-white">
                Get Started
              </button>
              <div className="mt-5">
                <Link href="/" className="text-base underline">
                  Book in a call first
                </Link>
              </div>
            </form>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:mx-10">
              {vids.map((video) => {
                return (
                  <a
                    target="_blank"
                    href={video.link}
                    key={video.id}
                    className="relative w-2/4 mx-auto md:w-auto"
                  >
                    <div className="border overflow-hidden rounded-2xl border-white ">
                      <Image
                        src={video.thumbnail}
                        alt="thumbnail"
                        className="rounded-2xl border-white hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="w-20 h-20 absolute top-0 right-0 bottom-0 left-0 m-auto">
                      <svg
                        aria-hidden="true"
                        role="img"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5l-6 4.5z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
