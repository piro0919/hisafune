import "ress";
import "../styles/globals.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/lazy";
import "swiper/css/pagination";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import Layout from "components/Layout";
import BackgroundContext from "contexts/BackgroundContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [background, setBackground] = useState("");

  return (
    <BackgroundContext.Provider value={setBackground}>
      <Layout background={background}>
        <Component {...pageProps} />
      </Layout>
    </BackgroundContext.Provider>
  );
}

export default MyApp;
