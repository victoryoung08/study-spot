import { Container } from "./components/common/Container";
import * as component from "./components/common/ComponentSelector";
import { NextSeo } from "next-seo";
import { Metadata, ResolvingMetadata } from "next";

type componentsType =
  | "Seo"
  | "Hero"
  | "SingleRowWithImage"
  | "TwoColumnCtaImageLeft"
  | "Features"
  | "TwoColumnCtaList";

export default async function Home() {
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
      {/* <NextSeo
        title="Home Page Title"
        description="Home page description of the page"
      /> */}
      {componentLists.map((item: any) => {
        const { __component, Component, ...rest } = item;
        return <Component key={item.id} {...rest} />;
      })}
    </Container>
  );
}

// generate dynamic metadata
export async function generateMetadata() {
  try {
    const seo = await fetch(
      `${process.env.STRAPI_API_ENDPOINT}/home?populate=deep`,
      {
        next: { revalidate: 1 },
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

    data.data.attributes.components.map((item: any) => {
      if (item.__component === "seo.seo") {
        console.log(item.description);
        return {
          title: item.title,
          description: item.description,
        };
      } else {
        return {
          title: "Not Found",
          description: "The page you are looking for does not exist.",
        };
      }
    });
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}
