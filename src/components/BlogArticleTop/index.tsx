import BackgroundContext from "contexts/BackgroundContext";
import { useContext, useEffect } from "react";

function BlogArticleTop(): JSX.Element {
  const setBackground = useContext(BackgroundContext);

  useEffect(() => {
    setBackground("#fff");
  }, [setBackground]);

  return <div>aaa</div>;
}

export default BlogArticleTop;
