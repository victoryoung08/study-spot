/* eslint-disable react/no-unescaped-entities */
import { Container } from "../../../components/common/Container";
import * as component from "../../../components/common/ComponentSelector";
import ErrorPage from "@/app/components/common/ErrorPage";

export default async function CreatorProgram(searchParams: any) {
  const { params } = searchParams;
  const { data } = await getCafeData(params);
  const headerWithGridImageProps = {
    title: data.data[0].attributes.cafe_name,
    location: data.data[0].attributes.location,
    item: [],
    images: data.data[0].attributes.images,
  };

  const fourColumnGridProps = {
    quietness: 90,
    items: [
      { name: "Features", tags: data.data[0].attributes.features },
      { name: "Styles", tags: data.data[0].attributes.styles },
      { name: "Vibe", tags: data.data[0].attributes.vibes },
    ],
  };

  const ctaCenterProps = {
    title: "Promotion",
    description: "Simply share a story or post and tag us!",
    cta_text: "Unlock Now 🎁",
    promo_code: data.data[0].attributes.discount,
  };

  return (
    <Container>
      <component.HeaderWithGridImage {...headerWithGridImageProps} />
      <component.FourColumnGrid {...fourColumnGridProps} />
      <component.CtaCenter {...ctaCenterProps} />
      <div>
        <h6 className="text-center text-3xl font-bold mb-2">
          {" "}
          Support your Study Spot ✨
        </h6>
        <p className="text-center">
          For extended study periods it's always great to buy another coffee ☕️
          Let's show some love and support them where we can!
        </p>
      </div>
    </Container>
  );
}

export async function generateMetadata({ params }: any) {
  try {
    const suburb = params.slug[0]
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("%20");
    const cafeName = params.slug[1];
    const seo = await fetch(
      `${process.env.STRAPI_API_ENDPOINT}/study-spots?filters[slug][$eq]=${cafeName}&filters[suburb][$eq]=${suburb}&populate=deep`,
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
      title: data.data[0].attributes.cafe_name,
      description: data.data[0].attributes.cafe_name,
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

async function getCafeData(params: { slug: string }): Promise<any> {
  const suburb = params.slug[0]
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("%20");
  const cafeName = params.slug[1];
  const response = await fetch(
    `${process.env.STRAPI_API_ENDPOINT}/study-spots?filters[slug][$eq]=${cafeName}&filters[suburb][$eq]=${suburb}&populate=deep`,
    {
      cache: "no-cache",
      next: { revalidate: 0 },
    }
  );

  let data = [];
  if (response.ok) {
    data = await response.json();
    return { data };
  } else {
    return <ErrorPage />;
  }
}
