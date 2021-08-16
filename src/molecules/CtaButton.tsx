import React from "react";
import styles from "./CtaButton.module.css";

interface PROPS {
  color: string;
  background: string;
  text: string;
  linkTo: string;
}

const CtaButton: React.FC<PROPS> = ({ color, background, text, linkTo }) => {
  return (
    <a
      className={styles.btn}
      href={linkTo}
      style={{
        color: `${color}`,
        backgroundColor: `${background}`,
        border: "solid 5px white",
      }}
    >
      {text}
    </a>
  );
};

export default CtaButton;
