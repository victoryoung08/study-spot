import * as component from "../components/common/ComponentSelector";
import ApplyNow from "../components/pages/creator-program/ApplyNow";

type componentsType =
  | "HeroWithBackground"
  | "Partners"
  | "SingleRowWithImage"
  | "BorderedText"
  | "ThreeGridCircle"
  | "Versions"
  | "BookNow"
  | "Videos";

export default async function ListCafe() {
  const response = await fetch(
    `${process.env.STRAPI_API_ENDPOINT}/list-cafe?populate=deep`,
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

  const componentLists = data.data.attributes.components.map((item: any) => {
    const name = item.__component.split(".")[1];
    const componentNameParts = name.split("-");

    // Capitalize each part and join them
    const componentName = componentNameParts
      .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");
    const Component = component[componentName as componentsType];
    return { ...item, Component };
  });
  return (
    <div>
      {componentLists.map((item: any) => {
        const { __component, Component, ...rest } = item;
        return <Component key={item.id} {...rest} />;
      })}
      <ApplyNow />
    </div>
  );
}
