import { useDebounceEffect, useToggle } from "ahooks";
import React, { PropsWithChildren, useRef } from "react";

interface TranslationProps {
  translation: string;
}

export function Translation({
  translation,
  children,
}: PropsWithChildren<TranslationProps>) {
  const [isVisible, { toggle }] = useToggle(false);
  const ref = useRef<any>();

  function show() {
    if (isVisible) {
      clearTimeout(ref.current);
    } else {
      ref.current = setTimeout(() => {
        toggle();
      }, 5000);
    }

    toggle();
  }

  return (
    <span style={{ cursor: "help" }}>
      {isVisible && (
        <span
          style={{
            backgroundColor: "lightyellow",
            border: "1px dashed lightgrey",
          }}
          onClick={show}
        >
          {translation}
        </span>
      )}
      {!isVisible && (
        <span style={{ textDecoration: "underline" }} onClick={show}>
          {children}
        </span>
      )}
    </span>
  );
}
