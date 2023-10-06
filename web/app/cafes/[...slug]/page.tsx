"use client";
import { usePathname } from "next/navigation";
const Page = () => {
  const path = usePathname();
  const slug = path.split("/");

  console.log(path);

  return <div>Slug: {JSON.stringify(slug[2])} </div>;
};

export default Page;
