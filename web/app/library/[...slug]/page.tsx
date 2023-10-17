import { Container } from "../../components/common/Container";
import Image from "next/image";
import Markdown from "markdown-to-jsx";

export default async function LibrarySlug(searchParams: any) {
  const { params } = searchParams;

  const response = await fetch(
    `${process.env.STRAPI_API_ENDPOINT}/libraries?filters[slug][$eq]=${params.slug}&populate=deep`,

    {
      next: { revalidate: 1 },
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    }
  );
  const library = await response.json();
  return (
    <Container>
      <div>
        <div>
          <h2 className="text-5xl lg:text-6xl font-bold">
            {library?.data[0]?.attributes?.title}
          </h2>
          <div className="flex gap-2 items-center mt-5">
            <div>
              <Image
                src={
                  library?.data[0]?.attributes?.author_image?.data?.attributes
                    ?.url || ""
                }
                height={50}
                width={50}
                className="rounded-full"
                alt={library?.data[0]?.attributes?.title || "Library Image"}
              />
            </div>
            <div>
              <p className="text-base font-bold">
                {library?.data[0]?.attributes?.author || ""} 
              </p>
              <p className="text-base">Founder</p>
            </div>
          </div>
            

          <div className="mt-44 w-2/4 mx-auto">
            <Markdown
              options={{
                overrides: {
                  h2: {
                    component: "h2",
                    props: {
                      className: "font-bold whitespace-pre text-4xl",
                    },
                  },
                  p: {
                    component: "div",
                    props: {
                      className: "text-base mb-10",
                    },
                  },
                  li: {
                    component: "li",
                    props: {
                      className: "list-item list-disc text-base list-inside",
                    },
                  },
                  img: {
                    component: "img",
                    props: {
                      className: "my-5 w-3/4 mx-auto",
                    },
                  },
                },
              }}
            >
              {library?.data[0]?.attributes?.description}
            </Markdown>
          </div>
        </div>
      </div>
    </Container>
  );
}
