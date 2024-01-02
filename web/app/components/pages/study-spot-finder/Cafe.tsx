"use client";
import { pushDataLayer } from "@/src/lib/gtm";
import Image from "next/image";
import Link from "next/link";

export default function Cafe({ cafe }: any) {
  return (
    <div className="pb-10">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {cafe?.map((item: any) => {
          const suburb = item?.attributes.suburb
            .split(" ")
            .join("-")
            .toLowerCase();
          return (
            <Link
              onClick={() =>
                pushDataLayer({
                  name: item?.attributes?.cafe_name,
                  path: `/cafes/${suburb}/${item?.attributes?.slug}`,
                })
              }
              href={`/cafes/${suburb}/${item?.attributes?.slug}`}
              key={item.id}
              className="rounded-3xl border border-white overflow-hidden hover:bg-primary transition-all ease-in-out delay-100 duration-500"
            >
              <Image
                src={item?.attributes?.images?.data[0]?.attributes?.url || ""}
                alt={item?.attributes?.cafe_name}
                width={400}
                height={400}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-5 ">
                <h2 className="font-semibold text-xl">
                  {item?.attributes?.cafe_name}
                </h2>
                <p className="text-sm mb-2">{item?.attributes?.suburb}</p>
                <div className="flex gap-2">
                  {item?.attributes?.features?.data?.map((item: any) => {
                    return (
                      <div
                        key={item.id}
                        className="border p-1 rounded-xl bg-primary tooltip"
                        data-tip={item?.attributes?.item}
                      >
                        <Image
                          width={5}
                          height={5}
                          src={
                            item?.attributes?.svg_icon?.data?.attributes?.url
                          }
                          alt={item?.attributes?.item}
                          className="w-5 h-5"
                        />
                      </div>
                    );
                  })}
                  {item?.attributes?.vibes?.data?.map((item: any) => {
                    return (
                      <div
                        key={item.id}
                        className="border p-1 rounded-xl bg-primary tooltip"
                        data-tip={item?.attributes?.item}
                      >
                        <Image
                          width={5}
                          height={5}
                          src={
                            item?.attributes?.svg_icon?.data?.attributes?.url
                          }
                          alt={item?.attributes?.item}
                          className="w-5 h-5"
                        />
                      </div>
                    );
                  })}
                  {item?.attributes?.styles?.data?.map((item: any) => {
                    return (
                      <div
                        key={item.id}
                        className="border p-1 rounded-xl bg-primary tooltip"
                        data-tip={item?.attributes?.item}
                      >
                        <Image
                          width={5}
                          height={5}
                          src={
                            item?.attributes?.svg_icon?.data?.attributes?.url
                          }
                          alt={item?.attributes?.item}
                          className="w-5 h-5"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
