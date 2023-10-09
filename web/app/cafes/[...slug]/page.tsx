// "use client";
// import { Container } from "@/app/components/common/Container";
// import About from "@/app/components/pages/cafe/About";
// import Hero from "@/app/components/pages/cafe/HeaderWithGridImage";
// import Promotion from "@/app/components/pages/cafe/Promotion";
// import Support from "@/app/components/pages/cafe/Support";
// import { usePathname } from "next/navigation";

// const Page = () => {
//   const path = usePathname();
//   const slug = path.split("/");

//   return (
//     <div>
//       <Hero />
//       <Promotion />
//       <About />
//       <Support />
//     </div>
//   );
// };

// export default Page;

import { Container } from "../../components/common/Container";
import * as component from "../../components/common/ComponentSelector";

type componentsType = "HeaderWithGridImage" | "CtaCenter" | "FourColumnGrid" ;

export default async function CreatorProgram() {
  const response = await fetch("http://127.0.0.1:1337/api/cafe?populate=deep", {
    next: { revalidate: 30 },
  });
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
