import { useWindowSize } from "@react-hook/window-size";
import React, { CSSProperties, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import useMeasure from "react-use-measure";

function BlogTop(): JSX.Element {
  const [width, height] = useWindowSize();
  const [style, setStyle] = useState<CSSProperties>();
  const [ref, { width: innerWidth }] = useMeasure();

  useEffect(() => {
    setStyle({
      height: `${height}px`,
      justifyContent: width > innerWidth ? "center" : "flex-start",
    });
  }, [height, innerWidth, width]);

  return (
    <div className={styles.wrapper} style={style}>
      <ul className={styles.list} ref={ref}>
        <li>
          <Link href="/blog/hoge">
            <a className={styles.anchor}>
              <div className={styles.date}>2021.10.07</div>
              <h2 className={styles.title}>かき氷を食べた日</h2>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hoge">
            <a className={styles.anchor}>
              <div className={styles.date}>2021.10.08</div>
              <h2 className={styles.title}>パンケーキを食べた日</h2>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hoge">
            <a className={styles.anchor}>
              <div className={styles.date}>2021.10.09</div>
              <h2 className={styles.title}>かき氷を食べた日</h2>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hoge">
            <a className={styles.anchor}>
              <div className={styles.date}>2021.10.10</div>
              <h2 className={styles.title}>パンケーキを食べた日</h2>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hoge">
            <a className={styles.anchor}>
              <div className={styles.date}>2021.10.11</div>
              <h2 className={styles.title}>かき氷を食べた日</h2>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hoge">
            <a className={styles.anchor}>
              <div className={styles.date}>2021.10.12</div>
              <h2 className={styles.title}>パンケーキを食べた日</h2>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BlogTop;
