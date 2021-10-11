import { useWindowHeight } from "@react-hook/window-size";
import BackgroundContext from "contexts/BackgroundContext";
import { CSSProperties, useContext, useEffect, useMemo } from "react";
import styles from "./style.module.scss";

function BlogArticleTop(): JSX.Element {
  const height = useWindowHeight();
  const style = useMemo<CSSProperties>(
    () => ({
      height: `${height}px`,
    }),
    [height]
  );
  const setBackground = useContext(BackgroundContext);

  useEffect(() => {
    setBackground("#fff");
  }, [setBackground]);

  return (
    <div className={styles.wrapper} style={style}>
      <article className={styles.article}>
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
