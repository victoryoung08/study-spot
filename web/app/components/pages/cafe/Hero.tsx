import Image from "next/image";
import { Container } from "../../common/Container";
import pinIcon from "@/public/images/pin.svg";
import img1 from "@/public/images/cherubcafe1.webp";
import img2 from "@/public/images/cherub-specialty-coffee-.webp";

const image = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img1 },
  { id: 4, image: img1 },
  { id: 5, image: img2 },
];

export default function Hero() {
  return (
    <Container>
      <div className="">
        <h2 className="mt-5 text-4xl font-semibold leading-tight lg:mt-0 lg:text-left lg:text-5xl">
          Cherub Specialty Coffee
        </h2>
        <div className="flex my-5">
          <Image src={pinIcon} alt="Location Icon" />
          <p className="text-base">15 Dora St. Hurstville NSW 2220</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Image src={img1} alt="image" />
          </div>
          <div className="grid grid-cols-2 gap-5">
            {image
              .map((item) => {
                return (
                  <div key={item.id}>
                    <Image src={item.image} alt="image" />
                  </div>
                );
              })
              .slice(1)}
          </div>
        </div>
      </div>
    </Container>
  );
}
