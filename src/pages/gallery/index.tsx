import GalleryTop from "components/GalleryTop";
import Seo from "components/Seo";
import React from "react";

function Gallery(): JSX.Element {
  return (
    <>
      <Seo title="ギャラリー" />
      <GalleryTop />
    </>
  );
}

export default Gallery;
