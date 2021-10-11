import { useWindowSize } from "@react-hook/window-size";
import { CSSProperties, useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import styles from "./style.module.scss";

function BlogArticleTop(): JSX.Element {
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
      <article className={styles.article} ref={ref}>
        <header className={styles.header}>
          <h2 className={styles.title}>パンケーキを食べた日</h2>
          <div className={styles.date}>2021.10.08</div>
        </header>
        <p className={styles.body}>おいしかった</p>
      </article>
    </div>
  );
}

export default BlogArticleTop;
