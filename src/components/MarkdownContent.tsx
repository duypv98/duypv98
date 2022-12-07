import { PropsWithoutRef, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownContent = (props: PropsWithoutRef<{ src: string; }>) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(props.src)
      .then((res) => res.text())
      .then((content) => setContent(content));
  }, [props.src]);

  return <ReactMarkdown>{content}</ReactMarkdown>
}

export default MarkdownContent;