import { Container } from "./components/common/Container";
import * as component from "./components/common/ComponentSelector";
import lodash from "lodash";

type componentsType =
  | "Hero"
  | "SingleRowWithImage"
  | "TwoColumnCtaImageLeft"
  | "Features"
  | "TwoColumnCtaList";

export default async function Home() {
  if (process.env.node_env !== "production") console.log(lodash);

  const response = await fetch(
    `${process.env.STRAPI_API_ENDPOINT}/home?populate=deep`,
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
    <Container>
      {componentLists.map((item: any) => {
        const { __component, Component, ...rest } = item;
        return <Component key={item.id} {...rest} />;
      })}
    </Container>
  );
}
