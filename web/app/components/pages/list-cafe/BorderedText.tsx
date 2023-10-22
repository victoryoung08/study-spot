import { Container } from "../../common/Container";
import Image from "next/image";

export default function BorderedText({ section_title, item }: any) {
  return (
    <Container>
      <div>
        {section_title && (
          <h2 className="text-center mb-20 text-3xl font-semibold md:text-4xl lg:text-5xl ">
            {section_title}
          </h2>
        )}

        <div className="mx-5 md:mx-10 lg:mx-32">
          {item.map((item: any) => {
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
                  <p className="my-5 text-sm">{item.description}</p>
                </div>
                {item?.image?.data && (
                  <div className="relative mt-10">
                    <Image
                      src={item.image.data?.attributes.url}
                      alt={item.title}
                      height={700}
                      width={700}
                      className="w-full"
                    />
                    {item.id === 3 || item.id === 4 ? (
                      <div className="bg-gradient-to-t h-2/4 mt-auto from-[#181818] absolute top-0 right-0 bottom-0 left-0"></div>
                    ) : (
                      <div className="bg-gradient-to-l w-2/4 ml-auto  from-[#181818] absolute top-0 right-0 bottom-0 left-0 "></div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
