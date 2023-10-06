"use client";
import { Container } from "@/app/components/common/Container";
import About from "@/app/components/pages/cafe/About";
import Hero from "@/app/components/pages/cafe/Hero";
import Promotion from "@/app/components/pages/cafe/Promotion";
import Support from "@/app/components/pages/cafe/Support";
import { usePathname } from "next/navigation";

const Page = () => {
  const path = usePathname();
  const slug = path.split("/");

  return (
    <div>
      <Hero />
      <Promotion />
      <About />
      <Support />
    </div>
  );
};

export default Page;
