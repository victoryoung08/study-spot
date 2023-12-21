import { Container } from "../../components/common/Container";
import Image from "next/image";
import Markdown from "markdown-to-jsx";

export default async function LibrarySlug(searchParams: any) {
  const { params } = searchParams;
  const { library } = await getArticles(params);
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
                className="rounded-full h-12 w-12 object-cover"
                alt={library?.data[0]?.attributes?.title || "Library Image"}
              />
            </div>
            <div>
              <p className="text-base font-bold">
                {library?.data[0]?.attributes?.author || ""}
              </p>
              <p className="text-base">Author</p>
            </div>
          </div>

          <div className="mt-20 w-3/4 mx-auto overflow-hidden">
            <Markdown
              options={{
                overrides: {
                  h2: {
                    component: "h2",
                    props: {
                      className: "mt-5 font-bold whitespace-pre text-4xl mb-2",
                    },
                  },
                  h3: {
                    component: "h3",
                    props: {
                      className:
                        "font-bold whitespace-pre text-xl mb-2 capitalize",
                    },
                  },
                  p: {
                    component: "div",
                    props: {
                      className: "text-base mb-10",
                    },
                  },
                  a: {
                    component: "a",
                    props: {
                      className: "text-base underline",
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
                      className: "mb-5 w-[500px]",
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

export async function generateMetadata(searchParams: any): Promise<any> {
  const { params } = searchParams;

  try {
    const seo = await fetch(
      `${process.env.STRAPI_API_ENDPOINT}/libraries?filters[slug][$eq]=${params.slug}&populate=deep`,
      {
        next: { revalidate: 0 },
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      }
    );
    const data = await seo.json();
    if (!data) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    }

    return {
      title: data.data[0].attributes.title,
      description: data.data[0].attributes.short_description,
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

async function getArticles(params: { slug: string }) {
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_ENDPOINT}/libraries?filters[slug][$eq]=${params.slug}&populate=deep`,

      {
        next: { revalidate: 0 },
        cache: "no-cache",
      }
    );
    const library = await response.json();
    return { library };
  } catch (error) {
    return {};
  }
}
