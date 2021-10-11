import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useWindowSize } from "@react-hook/window-size";
import styles from "./style.module.scss";
import ContentEditable, { Props } from "react-contenteditable";
import striptags from "striptags";
import useMeasure from "react-use-measure";

type FieldValues = {
  body: string;
  email: string;
  name: string;
  subject: string;
  tel: string;
};

function ContactTop(): JSX.Element {
  const [width, height] = useWindowSize();
  const [style, setStyle] = useState<CSSProperties>();
  const { handleSubmit, register, setValue, watch } = useForm<FieldValues>({
    defaultValues: {
      body: "",
      email: "",
      name: "",
      subject: "",
      tel: "",
    },
  });
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
  const [ref, { width: formInnerWidth }] = useMeasure();

  useEffect(() => {
    setStyle({
      height: `${height}px`,
      justifyContent: width > formInnerWidth ? "center" : "flex-start",
    });
  }, [formInnerWidth, height, width]);

  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.inner} ref={ref}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formInner}>
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
                  html={watch("name")}
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
                  html={watch("subject")}
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
                  html={watch("tel")}
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
                  html={watch("email")}
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
                  html={watch("body")}
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
    </div>
  );
}

export default ContactTop;
