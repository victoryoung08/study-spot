import Image from "next/image";
import { Container } from "../../common/Container";
import pinIcon from "@/public/images/pin.svg";
export default function HeaderWithGridImage({
  title,
  location,
  images,
  item,
}: any) {
  return (
    <Container>
      <div className="">
        <h2 className="mt-5 text-4xl font-semibold leading-tight lg:mt-0 lg:text-left lg:text-5xl">
          {title || ""}
        </h2>
        {location && (
          <div className="flex my-5">
            <Image src={pinIcon} alt="Location Icon" />
            <p className="text-base">{location || ""}</p>
          </div>
        )}
        {images && (
          <div className={item.length === 1 ? "" : "grid md:grid-cols-2 gap-5"}>
            <div>
              <Image
                src={images.data[0]?.attributes?.url}
                alt="image"
                width={400}
                height={400}
                className="w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              {images.data
                .map((img: any) => {
                  return (
                    <div key={item.id}>
                      <Image
                        src={img?.attributes?.url}
                        width={200}
                        height={200}
                        className="w-full h-full"
                        alt={
                          img?.image?.data?.attributes?.alternativeText ||
                          "Image"
                        }
                      />
                    </div>
                  );
                })
                .slice(1, 5)}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}