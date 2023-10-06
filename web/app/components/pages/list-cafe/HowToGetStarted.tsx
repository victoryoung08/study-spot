import { Container } from "../../common/Container";
import img1 from "@/public/images/op1.webp";
import img2 from "@/public/images/op2.webp";
import img3 from "@/public/images/op3.webp";
import img4 from "@/public/images/op4.webp";
import Image from "next/image";

const opportunities = [
  {
    id: 1,
    title: "Sign up through our form below",
    desc1:
      "This will take our to our Checkout Page. Use our code EARLY25 to reserve your Early Study Spot offer.",
  },
  {
    id: 2,
    title: "Fill in your Cafe Details",
    desc1:
      "We'll send a form to grab your cafe information to post on our app.",
  },
  {
    id: 3,
    title: "Schedule in your Early Study Spot Content",
    desc1:
      "As an early Study Spot, we'll come to you each month to create 3x content for Instagram or Tiktok.",
  },
  {
    id: 4,
    title: "We'll continue to promote you",
    desc1:
      "Our team will work at building a community to funnel into your app and your cafe.",
  },
];

export default function HowToGetStarted() {
  return (
    <Container>
      <div>
        <h2 className="text-center mb-20 text-3xl font-semibold md:text-4xl lg:text-5xl ">
          How to get started
        </h2>
        <div className=" mx-5 md:mx-10 lg:mx-32">
          {opportunities.map((item) => {
            return (
              <div
                key={item.id}
                className="border-l relative my-7 py-10 px-5 md:px-10 lg:px-14"
              >
                <div className="w-10 h-10 absolute -top-9 -left-5">
                  <svg
                    aria-hidden="true"
                    role="img"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-48.4 7l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11 11.6Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 className="font-semibold text-3xl">{item.title}</h2>
                  <p className="text-base mt-5">{item.desc1}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
