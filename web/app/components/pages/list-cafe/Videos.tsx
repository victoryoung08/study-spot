import { Container } from "../../common/Container";
import Image from "next/image";

export default function Videos({ item }: any) {
  return (
    <Container>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:mx-10">
        {item.map((video: any, index: number) => {
          return (
            <a
              target="_blank"
              href={video.video_link || "/"}
              key={video.id || index + 1}
              className="relative w-2/4 mx-auto md:w-auto"
            >
              <div className="border overflow-hidden rounded-2xl border-white ">
                <Image
                  src={video?.thumnail_video?.data?.attributes?.url}
                  width={400}
                  height={400}
                  alt={
                    video?.thumnail_video?.data?.attributes?.alternativeText ||
                    "video thumbnail"
                  }
                  className="rounded-2xl border-white hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="w-20 h-20 absolute top-0 right-0 bottom-0 left-0 m-auto">
                <svg
                  aria-hidden="true"
                  role="img"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5l-6 4.5z"
                  ></path>
                </svg>
              </div>
            </a>
          );
        })}
      </div>
    </Container>
  );
}
