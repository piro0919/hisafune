import "ress";
import "../styles/globals.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "react-lazy-load-image-component/src/effects/blur.css";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
