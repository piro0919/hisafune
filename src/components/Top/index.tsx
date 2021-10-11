import Image from "next/image";
import hoge from "./images/hisafune_240943075_188204666710847_4890373253446551685_n (0-00-00-00).png";
import fuga from "./images/hisafune_195311938_281397087012975_3500752894579917638_n (0-00-00-00).png";
import piyo from "./images/hisafune_193698694_227680402142193_3248354133039169378_n (0-00-00-00).png";
import styles from "./style.module.scss";
import { useWindowSize } from "@react-hook/window-size";
import React, { CSSProperties, useContext, useEffect, useMemo } from "react";
import BackgroundContext from "contexts/BackgroundContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Lazy, Pagination } from "swiper";
import Loader from "react-loader-spinner";

function Top(): JSX.Element {
  const [width, height] = useWindowSize();
  const style = useMemo<CSSProperties>(
    () => ({
      height: `${height}px`,
    }),
    [height]
  );
  const imageWrapperStyle = useMemo<CSSProperties>(
    () => ({
      height: `${height * 0.8}px`,
      width: `${width * 0.8}px`,
    }),
    [height, width]
  );
  const setBackground = useContext(BackgroundContext);

  useEffect(() => {
    setBackground("#fff");
  }, [setBackground]);

  return (
    <div className={styles.wrapper} style={style}>
      <Swiper
        autoplay={{
          delay: 10000,
        }}
        className={styles.swiper}
        direction="vertical"
        effect="fade"
        loop={true}
        modules={[A11y, Autoplay, EffectFade, Lazy, Pagination]}
        pagination={{ clickable: true }}
        speed={1500}
        style={style}
      >
        <SwiperSlide
          className={styles.slide}
          style={{
            background: "linear-gradient(to right bottom, #c3b2a2, #9a8776)",
          }}
        >
          <div className={styles.imageWrapper} style={imageWrapperStyle}>
            <Image
              alt=""
              className={styles.image}
              layout="fill"
              objectFit="contain"
              quality={100}
              src={hoge}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={styles.slide}
          style={{
            background: "linear-gradient(to right bottom, #a899ae, #827088)",
          }}
        >
          <div className={styles.imageWrapper} style={imageWrapperStyle}>
            <Image
              alt=""
              className={styles.image}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              quality={100}
              src={fuga}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={styles.slide}
          style={{
            background: "linear-gradient(to right bottom, #909668, #666c40)",
          }}
        >
          <div className={styles.imageWrapper} style={imageWrapperStyle}>
            <Image
              alt=""
              className={styles.image}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              quality={100}
              src={piyo}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Top;
