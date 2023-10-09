import Content from "../components/pages/study-spot-finder/Content";
import filterFeatures from "../hooks/filterFeatures";

export default async function StudySpotFinder() {
  const response = await fetch(
    `${process.env.STRAPI_API_ENDPOINT}/study-spots?populate=deep`,
    {
      next: { revalidate: 30 },
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    }
  );
  const data = await response.json();

  const featuresRaw = data.data.map((item: any) => {
    return item.attributes.features;
  });
  const vibesRaw = data.data.map((item: any) => {
    return item.attributes.vibes;
  });
  const stylesRaw = data.data.map((item: any) => {
    return item.attributes.styles;
  });
  const features = filterFeatures(featuresRaw);
  const vibes = filterFeatures(vibesRaw);
  const styles = filterFeatures(stylesRaw);

  const cafe = data.data;
  // console.log(features);
  // const featuresResponse = await fetch(
  //   `${process.env.STRAPI_API_ENDPOINT}/features?populate=deep`,
  //   {
  //     next: { revalidate: 30 },
  //     headers: {
  //       Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
  //     },
  //   }
  // );

  // const featuresData = await featuresResponse.json();
  // console.log(featuresData);
  return (
    <div>
      <Content features={features} vibes={vibes} styles={styles} cafe={cafe} />
    </div>
  );
}
