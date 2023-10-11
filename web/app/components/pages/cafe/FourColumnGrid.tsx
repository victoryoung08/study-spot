import { Container } from "../../common/Container";
import Image from "next/image";

export default function FourColumnGrid({ quietness, items }: any) {
  return (
    <Container>
      <div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((item: any) => {
            if (!item.tags.data.length) return;
            return (
              <div key={item.name}>
                <div>
                  <h2 className="text-2xl font-semibold">{item.name || ""}</h2>
                  <div className="mt-2 space-y-2">
                    {item?.tags?.data?.map((tag: any) => {
                      return (
                        <div key={tag.id} className="flex gap-2 items-center">
                          <div className="bg-primary border border-white p-2 rounded-2xl">
                            <Image
                              src={
                                tag?.attributes?.svg_icon?.data?.attributes?.url
                              }
                              alt={tag?.atrributes?.item}
                              width={5}
                              height={5}
                              className="w-5 h-5"
                            />
                          </div>
                          <p className="text-base">
                            {tag.attributes.item || ""}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-semibold">Quietness</h2>
          <progress
            className="progress w-80 progress-primary"
            value={quietness || 0}
            max="100"
          ></progress>
          <p className="text-sm">Cafe Chatter</p>
        </div>
      </div>
    </Container>
  );
}
