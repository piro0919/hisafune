import React, {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useWindowSize } from "@react-hook/window-size";
import styles from "./style.module.scss";
import ContentEditable, { Props } from "react-contenteditable";
import striptags from "striptags";
import BackgroundContext from "contexts/BackgroundContext";
import useMeasure from "react-use-measure";

function ContactTop(): JSX.Element {
  const [width, height] = useWindowSize();
  const [style, setStyle] = useState<CSSProperties>();
  const { handleSubmit, register, setValue } = useForm();
  const onSubmit = useCallback((data) => console.log(data), []);
  const handleChange = useCallback<Props["onChange"]>(
    ({ currentTarget: { id }, target: { value } }) => {
      setValue(id, striptags(value));
    },
    [setValue]
  );
  const handleChangeTextarea = useCallback<Props["onChange"]>(
    ({ currentTarget: { id }, target: { value } }) => {
      setValue(id, value);
    },
    [setValue]
  );
  const setBackground = useContext(BackgroundContext);
  const [ref, { width: formInnerWidth }] = useMeasure();

  useEffect(() => {
    setBackground("linear-gradient(to right bottom, #ebebeb, #efefef)");
  }, [setBackground]);

  useEffect(() => {
    setStyle({
      height: `${height}px`,
      justifyContent: width > formInnerWidth ? "center" : "flex-start",
    });
  }, [formInnerWidth, height, width]);

  return (
    <div className={styles.wrapper} style={style}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formInner} ref={ref}>
          <div className={styles.fieldsWrapper}>
            <div className={styles.fieldWrapper}>
              <label className={styles.label} htmlFor="name">
                お名前
                <abbr className={styles.abbr}>*</abbr>
              </label>
              <ContentEditable
                {...register("name")}
                className={styles.input}
                contentEditable={true}
                html=""
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label} htmlFor="subject">
                件名
              </label>
              <ContentEditable
                {...register("subject")}
                className={styles.input}
                contentEditable={true}
                html=""
                id="subject"
                onChange={handleChange}
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label} htmlFor="tel">
                ご連絡先（電話番号）
              </label>
              <ContentEditable
                {...register("tel")}
                className={styles.input}
                contentEditable={true}
                html=""
                id="tel"
                onChange={handleChange}
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label} htmlFor="email">
                ご連絡先（メールアドレス）
              </label>
              <ContentEditable
                {...register("subject")}
                className={styles.input}
                contentEditable={true}
                html=""
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className={styles.fieldWrapper}>
              <label className={styles.label} htmlFor="body">
                ご依頼内容
                <abbr className={styles.abbr}>*</abbr>
              </label>
              <ContentEditable
                {...register("body")}
                className={styles.textarea}
                contentEditable={true}
                html=""
                id="body"
                onChange={handleChangeTextarea}
              />
            </div>
          </div>
          <button className={styles.button} type="submit">
            送信する
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactTop;
