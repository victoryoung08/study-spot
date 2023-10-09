import { Container } from "../../components/common/Container";
import * as component from "../../components/common/ComponentSelector";

type componentsType = "HeaderWithGridImage" | "CtaCenter" | "FourColumnGrid";

export default async function CreatorProgram(searchParams: any) {
  const { params } = searchParams;

  const response = await fetch(
    `${process.env.STRAPI_API_ENDPOINT}/study-spots?filters[slug][$eq]=${params.slug}&populate=deep`,
    {
      next: { revalidate: 1 },
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    }
  );

  let data = [];
  if (response.ok) {
    data = await response.json();
  } else {
    return <>Error</>;
  }

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
    cta_link: "/",
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
