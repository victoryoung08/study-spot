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

  const componentLists = data.data.attributes.components
    .map((item: any) => {
      const name = item.__component.split(".")[1];
      const componentNameParts = name.split("-");

      // Capitalize each part and join them
      const componentName = componentNameParts
        .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
      if (componentName === "Seo") return;

      const Component = component[componentName as componentsType];
      return { ...item, Component };
    })
    .filter((item: any) => item);
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

// generate dynamic metadata
export async function generateMetadata() {
  try {
    const seo = await fetch(
      `${process.env.STRAPI_API_ENDPOINT}/list-cafe?populate=deep`,
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

    const seoData2 = data.data.attributes.components.filter((item: any) => {
      return item.__component === "seo.seo";
    })[0];

    return {
      title: seoData2.title,
      description: seoData2.description,
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}
