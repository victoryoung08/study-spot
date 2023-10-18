import Head from "next/head";
import { NextSeo } from "next-seo";

type IMetaProps = {
  title: string;
  description: string;
  keywords?: string;
};

const Seo = ({ title, description, keywords }: IMetaProps) => {
  return (
    <>
      {/* <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      /> */}
      <div>test</div>
    </>
  );
};

export default Seo;

