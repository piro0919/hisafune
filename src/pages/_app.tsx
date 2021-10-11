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
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [background, setBackground] = useState("");

  return (
    <>
      <Head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <BackgroundContext.Provider value={setBackground}>
        <Layout background={background}>
          <Component {...pageProps} />
        </Layout>
      </BackgroundContext.Provider>
    </>
  );
}

export default MyApp;
