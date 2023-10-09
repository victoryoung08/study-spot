import { Container } from "../components/common/Container";
import * as component from "../components/common/ComponentSelector";

type componentsType = "Hero" | "AboutUs" | "TwoColumnText" | "CtaCenter";

export default async function About() {
  const response = await fetch(
    `${process.env.STRAPI_API_ENDPOINT}/about?populate=deep`,
    {
      next: { revalidate: 30 },
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
