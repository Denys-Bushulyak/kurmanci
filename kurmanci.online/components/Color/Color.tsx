import * as React from "react";
import { PropsWithChildren } from "react";

interface ColorProps {
  value: string;
}

export function Color(props: PropsWithChildren<ColorProps>) {
  return <span style={{ color: props.value }}>{props.children}</span>;
}
