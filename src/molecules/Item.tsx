import React from "react";
import styles from "./Item.module.css";

interface PROPS {
  text: string;
}

const Item: React.FC<PROPS> = ({ text }) => {
  return (
    <div>
      <h2 className={styles.text}>{text}</h2>
    </div>
  );
};

export default Item;
