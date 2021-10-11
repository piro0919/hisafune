import { GetStaticProps } from "next";
import { createClient } from "microcms-js-sdk";
import React from "react";
import dynamic from "next/dynamic";
import Seo from "components/Seo";

const BlogTop = dynamic(() => import("components/BlogTop"), {
  ssr: false,
});

function Blog(): JSX.Element {
  return (
    <>
      <Seo title="日記" />
      <BlogTop />
    </>
  );
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const client = createClient({
//     apiKey: "7a714958-1dcb-40ac-a1aa-b83e7d46454f",
//     serviceDomain: "hisafune",
//   });
//   const a = await client.get<Blog[]>({
//     endpoint: "blogs",
//   });

//   return {
//     props: {},
//     revalidate: 60 * 60,
//   };
// };

export default Blog;
