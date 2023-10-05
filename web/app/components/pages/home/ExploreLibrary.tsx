import { Container } from "../../common/Container";
import img1 from "@/public/images/lib1.webp";
import img2 from "@/public/images/lib2.webp";
import img3 from "@/public/images/lib3.webp";
import Image from "next/image";

const library = [
  { id: 1, title: "All the Study Friendly Cafes in Strathfield", Image: img1 },
  { id: 2, title: "Why Studying at a Cafe feels so Productive", Image: img2 },
  { id: 1, title: "Aesthetic and Chill Study Cafes in Mascot", Image: img3 },
];

export default function ExploreLibrary() {
  return (
    <Container>
      <div className="lg:my-20 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="mt-5 text-4xl font-semibold leading-tight lg:mt-0 lg:text-left lg:text-3xl">
            Explore our Library
          </h2>
          <p className="mt-5 lg:mt-10 mb-5 text-base ">
            Here you&apos;ll find our quick guides, reviews and recommendations
            for the study spots near you
          </p>
          <button
            type="button"
            className="btn btn-primary rounded-xl border border-white hover:border-white bg-btnColor px-7 capitalize text-base"
          >
            Find a Study Spot
          </button>
        </div>
        <div className="flex flex-col gap-10">
          {library.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center border border-white rounded-2xl md:w-3/4 lg:w-auto"
              >
                <Image
                  src={item.Image}
                  alt=""
                  className="w-44 lg:w-1/4 h-28 rounded-tl-2xl rounded-bl-2xl"
                />
                <span className="text-sm lg:text-base font-semibold mx-5">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
