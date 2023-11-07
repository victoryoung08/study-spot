/* eslint-disable react/no-unescaped-entities */
import { Container } from "../components/common/Container";
import * as component from "../components/common/ComponentSelector";
import ErrorPage from "../components/common/ErrorPage";

export default async function Page(searchParams: any) {
  const { params } = searchParams;

  const response = await fetch(
    `${process.env.STRAPI_API_ENDPOINT}/pages?filters[path][$eq]=/${params.pages}&populate=deep`,
    {
      next: { revalidate: 1 },
      // headers: {
      //   Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      // },
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
    </div>
  );
}

// // generate dynamic metadata
// export async function generateMetadata({ params }: any) {
//   try {
//     const seo = await fetch(
//       `${process.env.STRAPI_API_ENDPOINT}/study-spots?filters[slug][$eq]=${params.slug}&populate=deep`,
//       {
//         next: { revalidate: 1 },
//         headers: {
//           Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
//         },
//       }
//     );
//     const data = await seo.json();
//     if (!data) {
//       return {
//         title: "Not Found",
//         description: "The page you are looking for does not exist.",
//       };
//     }

//     return {
//       title: data.data[0].attributes.cafe_name,
//       description: data.data[0].attributes.cafe_name,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       title: "Not Found",
//       description: "The page you are looking for does not exist.",
//     };
//   }
// }
