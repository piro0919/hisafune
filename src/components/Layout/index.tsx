import React, {
  ReactNode,
  ReactPortal,
  useCallback,
  useEffect,
  useState,
} from "react";
import hoge from "./images/hisafune_101644805_660012601244645_1094594923886376634_n (0-00-00-00).png";
import Image from "next/image";
import styles from "./style.module.scss";
import { useOutsideClickRef } from "rooks";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Scrollbar, { ScrollbarProps } from "react-scrollbars-custom";
import { useWindowSize } from "@react-hook/window-size";

export type LayoutProps = {
  background: string;
  children: ReactNode;
};

function Layout({ background, children }: LayoutProps): JSX.Element {
  const [width, height] = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = useCallback(() => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }, []);
  const handleOutsideClick = useCallback(() => {
    setShowMenu(false);
  }, []);
  const [ref] = useOutsideClickRef(handleOutsideClick);
  const { pathname } = useRouter();
  const [style, setStyle] = useState<ScrollbarProps["style"]>();

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  useEffect(() => {
    setStyle({ height, background, width });
  }, [background, height, width]);

  return (
    <>
      <AnimatePresence exitBeforeEnter={true} initial={true}>
        <motion.main
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={pathname}
          initial={{ opacity: 0 }}
        >
          <Scrollbar noScrollY={true} rtl={true} style={style}>
            {children}
          </Scrollbar>
        </motion.main>
      </AnimatePresence>
      <div className={styles.buttonWrapper} ref={ref}>
        {showMenu ? (
          <aside className={styles.aside}>
            <ul className={styles.snsList}>
              <li>
                <SocialIcon
                  className={styles.icon}
                  target="_blank"
                  url="https://www.instagram.com/hisafune"
                />
              </li>
              <li>
                <SocialIcon
                  className={styles.icon}
                  target="_blank"
                  url="https://www.youtube.com/channel/UCzp-G8Q0zWj4GC1lFo2OmjA"
                />
              </li>
            </ul>
            <nav className={styles.nav}>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link href="/">
                    <a className={styles.a}>トップ</a>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/gallery">
                    <a className={styles.a}>ギャラリー</a>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/blog">
                    <a className={styles.a}>日記</a>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/about">
                    <a className={styles.a}>ひさ舟について</a>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/contact">
                    <a className={styles.a}>ご依頼等</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        ) : null}
        <button className={styles.button} onClick={handleClick}>
          <Image alt="hoge" layout="fill" src={hoge} />
        </button>
      </div>
    </>
  );
}

export default Layout;
