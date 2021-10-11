import { useWindowSize } from "@react-hook/window-size";
import BackgroundContext from "contexts/BackgroundContext";
import React, { CSSProperties, useContext, useEffect, useState } from "react";
import hoge from "./images/evqo3m1f80Ki21k1633664509_1633664525.png";
import styles from "./style.module.scss";
import useMeasure from "react-use-measure";
import { Scrollbar } from "react-scrollbars-custom";

function AboutTop(): JSX.Element {
  const [width, height] = useWindowSize();
  const [style, setStyle] = useState<CSSProperties>();
  const setBackground = useContext(BackgroundContext);
  const [ref, { width: innerWidth }] = useMeasure();

  useEffect(() => {
    const { src } = hoge;

    setBackground(`url(${src}) no-repeat center / cover #000`);
  }, [setBackground]);

  useEffect(() => {
    setStyle({
      height: `${height}px`,
      justifyContent: width > innerWidth ? "center" : "flex-start",
    });
  }, [height, innerWidth, width]);

  return (
    <Scrollbar noScrollY={true} rtl={true} style={{ height, width }}>
      <div className={styles.wrapper} style={style}>
        <div className={styles.inner} ref={ref}>
          <article className={styles.article}>
            <h2>河村ひさ舟</h2>
            <p>
              広島県福山市を中心に活動している書家。
              <br />
              YouTuber としても活動も行っている。
            </p>
          </article>
          <article className={styles.article}>
            <h3>受賞</h3>
            <dl className={styles.list}>
              <div className={styles.item}>
                <dt>2013年</dt>
                <dd>
                  <ul>
                    <li>日展 入選</li>
                  </ul>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>2012年</dt>
                <dd>
                  <ul>
                    <li>日展 入選</li>
                  </ul>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>2010年</dt>
                <dd>
                  <ul>
                    <li>日展 入選</li>
                    <li>読売書法展 読売俊英賞</li>
                  </ul>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>2009年</dt>
                <dd>
                  <ul>
                    <li>日展 入選</li>
                  </ul>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>2008年</dt>
                <dd>
                  <ul>
                    <li>日展 入選</li>
                  </ul>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>2007年</dt>
                <dd>
                  <ul>
                    <li>笹波 準大賞</li>
                    <li>読売書法展 読売奨励賞</li>
                  </ul>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>2006年</dt>
                <dd>
                  <ul>
                    <li>日展 入選</li>
                    <li>読売書法展 読売奨励賞</li>
                  </ul>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>2005年</dt>
                <dd>
                  <ul>
                    <li>日展 入選</li>
                  </ul>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>2004年</dt>
                <dd>
                  <ul>
                    <li>日本書芸院 大賞</li>
                  </ul>
                </dd>
              </div>
              <div className={styles.item}>
                <dt>2003年</dt>
                <dd>
                  <ul>
                    <li>日展 入選</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </Scrollbar>
  );
}

export default AboutTop;
