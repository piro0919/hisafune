import { GetStaticProps } from "next";
import { createClient } from "microcms-js-sdk";
import React from "react";
import dynamic from "next/dynamic";

const BlogArticleTop = dynamic(() => import("components/BlogArticleTop"), {
  ssr: false,
});

function Id(): JSX.Element {
  return <BlogArticleTop />;
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const client = createClient({
//     apiKey: "7a714958-1dcb-40ac-a1aa-b83e7d46454f",
//     serviceDomain: "hisafune",
//   });
//   const a = await client.get<Blog>({
//     contentId: "ol09agj-32nv",
//     endpoint: "blogs",
//   });

//   return {
//     props: {},
//     revalidate: 60 * 60,
//   };
// };

export default Id;
