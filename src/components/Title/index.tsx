import React from "react";
import "./styles.css";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps extends React.ComponentPropsWithoutRef<"h1"> {
  level: HeadingLevel;
  children?: React.ReactNode;
}

export default function Title({ level, children, ...props }: TitleProps) {
  const tagName = `h${level}` as keyof JSX.IntrinsicElements;

  return React.createElement(tagName, props, children);
}
