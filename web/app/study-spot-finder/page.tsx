import Content from "../components/pages/study-spot-finder/Content";
import getUniqueValues from "../hooks/getUniqueValues";

export default async function StudySpotFinder() {
  const response = await fetch(
    `${process.env.STRAPI_API_ENDPOINT}/study-spots?populate=deep`,
    {
      next: { revalidate: 1 },
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
  const features = getUniqueValues(featuresRaw);
  const vibes = getUniqueValues(vibesRaw);
  const styles = getUniqueValues(stylesRaw);
  const cafe = data.data;

  return (
    <div>
      <Content features={features} vibes={vibes} styles={styles} cafe={cafe} />
    </div>
  );
}
