import { Container } from "../../common/Container";
import img1 from "@/public/images/cherub.png";
import img2 from "@/public/images/august.webp";
import img3 from "@/public/images/beans.webp";
import img4 from "@/public/images/cefedelluna.webp";
import Image from "next/image";

const images = [
  { id: 1, Image: img1 },
  { id: 2, Image: img2 },
  { id: 3, Image: img3 },
  { id: 4, Image: img4 },
];

export default function Partners({title, item}: any) {
  return (
    <Container>
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-white mb-5">
          {title || ""}
        </h2>

        {/* image not showing */}
        <div className="flex gap-10 items-center justify-center">
          {images.map((item) => {
            return (
              <div key={item.id}>
                <Image src={item.Image} alt="image" width={100} />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
