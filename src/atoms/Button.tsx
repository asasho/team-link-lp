import React from "react";
import styles from "./Button.module.css";

interface PROPS {
  color: string;
  background: string;
  display: string;
  text: string;
  linkTo: string;
}

const Button: React.FC<PROPS> = ({
  color,
  background,
  text,
  linkTo,
  display,
}) => {
  return (
    <a
      className={styles.btn}
      href={linkTo}
      style={{
        color: `${color}`,
        backgroundColor: `${background}`,
        display: `${display}`,
      }}
    >
      <h2>{text}</h2>
    </a>
  );
};

export default Button;
