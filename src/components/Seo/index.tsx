import { NextSeo, NextSeoProps } from "next-seo";
import React from "react";

export type SeoProps = Partial<Pick<NextSeoProps, "description" | "title">>;

function Seo({
  description = "書家 河村ひさ舟ののオフィシャルサイト",
  title,
}: SeoProps): JSX.Element {
  return (
    <NextSeo
      defaultTitle="書家 河村ひさ舟"
      description={description}
      // TODO
      nofollow={true}
      // TODO
      noindex={true}
      title={title}
      titleTemplate="%s - 書家 河村ひさ舟"
    />
  );
}

export default Seo;
