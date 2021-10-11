import { useWindowHeight } from "@react-hook/window-size";
import BackgroundContext from "contexts/BackgroundContext";
import { CSSProperties, useContext, useEffect, useMemo } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

function BlogTop(): JSX.Element {
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
      <ul className={styles.list}>
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
              <div className={styles.date}>2021.10.07</div>
              <h2 className={styles.title}>かき氷を食べた日</h2>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BlogTop;
