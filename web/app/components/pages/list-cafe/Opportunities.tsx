import { Container } from "../../common/Container";
import img1 from "@/public/images/op1.webp";
import img2 from "@/public/images/op2.webp";
import img3 from "@/public/images/op3.webp";
import img4 from "@/public/images/op4.webp";
import Image from "next/image";

const opportunities = [
  {
    id: 1,
    title: "Boost your word of mouth",
    desc1: "There's nothing stronger than a friend's recommendation.",
    desc2:
      "With Study Spot, you’re able incentivise your customers to share social media content for a promotion of your choice.",
    Image: img1,
  },
  {
    id: 2,
    title: "Connect with a warm audience",
    desc1:
      "Digital marketing channels like Instagram and Tiktok don’t always put you in front of high-buying intent customers.",
    desc2:
      "Study Spot helps you reach those who are actively looking for a cafe to go to - right there and then.",
    Image: img2,
  },
  {
    id: 3,
    title: "Increase your reach and visibility",
    desc1:
      "Get more eyeballs to your cafe. We’ll do the work of finding cafe enthusiasts who enjoy great spaces and environments.",
    desc2: "We're talking Tiktok, Instagram, Google - all promoting you!",
    Image: img3,
  },
  {
    id: 4,
    title: "Another source of revenue",
    desc1: "There's a gap with finding the perfect study cafe.",
    desc2:
      "Our Study Spot apps helps customers find study friendly cafes like yours providing an additional source of leads, customers and branding opportunities.",
    Image: img4,
  },
];

export default function Opportunities() {
  return (
    <Container>
      <div>
        <div className="mx-5 md:mx-10 lg:mx-32">
          {opportunities.map((item) => {
            return (
              <div
                key={item.id}
                className="border-l relative my-7 py-5 px-5 md:px-10 lg:px-14"
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
                  <p className="my-5 text-sm">{item.desc1}</p>
                  <p className="text-sm">{item.desc2}</p>
                </div>
                <div className="relative mt-10">
                  <Image src={item.Image} alt={item.title} />
                  {item.id === 3 || item.id === 4 ? (
                    <div className="bg-gradient-to-t h-2/4 mt-auto from-[#181818] absolute top-0 right-0 bottom-0 left-0"></div>
                  ) : (
                    <div className="bg-gradient-to-l w-2/4 ml-auto  from-[#181818] absolute top-0 right-0 bottom-0 left-0 "></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
