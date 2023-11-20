import * as component from "../components/common/ComponentSelector";
import ErrorPage from "../components/common/ErrorPage";
export default async function Page(searchParams: any) {
  const { params } = searchParams;
  const response = await fetch(
    `${process.env.STRAPI_API_ENDPOINT}/pages?filters[path][$eq]=/${params.pages}&populate=deep`,
    {
      next: { revalidate: 0 },
    }
  );

  let data = [];
  if (response.ok) {
    data = await response.json();
    if (data.data.length === 0) {
      return <ErrorPage />;
    }
  } else {
    return <ErrorPage />;
  }

  const componentLists = data.data[0].attributes.components
    .map((item: any) => {
      const name = item.__component.split(".")[1];
      const componentNameParts = name.split("-");
      // Capitalize each part and join them

      const componentName: string = componentNameParts
        .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");

      if (componentName === "Seo") return;
      //@ts-expect-error ignore
      const Component = component[componentName];
      return { ...item, Component };
    })
    .filter((item: any) => item);

  return (
    <div>
      {componentLists.map((item: any) => {
        const { __component, Component, ...rest } = item;
        return <Component key={item.id} {...rest} />;
      })}
    </div>
  );
}

// generate dynamic metadata
export async function generateMetadata({ params }: any) {
  try {
    const seo = await fetch(
      `${process.env.STRAPI_API_ENDPOINT}/pages?filters[path][$eq]=/${params.pages}&populate=deep`,
      {
        next: { revalidate: 1 },
      }
    );
    const data = await seo.json();
    if (!data) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    }

    const seoData2 = data.data[0].attributes.components.filter((item: any) => {
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
