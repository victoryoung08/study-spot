import { Container } from "../../common/Container";
import Image from "next/image";
import Link from "next/link";

export default function TwoColumnCtaBorder({ libraries }: any) {
  return (
    <Container>
    
      <div className="text-center mb-10">
        <h2 className="font-bold text-4xl lg:text-5xl">
          Explore the Cafe Library
        </h2>
      </div>
      <div className="space-y-10">
        {libraries?.data?.map((item: any) => {
          return (
            <Link
              href={`/library/${item.attributes.slug}`}
              key={item?.id}
              className="flex border rounded-3xl "
            >
              <div>
                <Image
                  src={
                    item?.attributes?.library_image?.data?.attributes?.url || ""
                  }
                  alt={
                    item.attributes.library_image.data.attributes
                      .alternativeText || item.attributes.title
                  }
                  width={500}
                  height={350}
                  className="rounded-tl-3xl rounded-bl-3xl"
                />
              </div>
              <div className="flex-1 m-10">
                <h2 className="font-medium text-3xl">
                  {item?.attributes.title || ""}
                </h2>
                <p className="text-base mt-5">
                  {item?.attributes.short_description || ""}
                </p>
                <div className="flex justify-end mt-5">
                  <p className="text-sm font-bold">Read more</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
