import React from "react";
import styles from "./Process.module.css";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { selectProcess } from "../../features/process/processSlice";
import Step from "../../molecules/Step";
import MediaQuery from "react-responsive";

Modal.setAppElement("#root");

const Process: React.FC = () => {
  const process = useSelector(selectProcess);

  return (
    <div>
      <MediaQuery minWidth={1170}>
        <div
          className={styles.triangle}
          style={{ marginLeft: `${process.left}`, marginRight: "auto" }}
        ></div>
      </MediaQuery>
      <div className={styles.process}>
        <div className={styles.title}>
          <div className={styles.number}>
            <h1>0{process.id}</h1>
          </div>
          <h1 className={styles.number_text}>{process.title}</h1>
        </div>
        <div className={styles.step}>
          <Step
            id={1}
            image={process.FirstImg}
            title={process.FirstTitle}
            text={process.FirstText}
          />
          <Step
            id={2}
            image={process.SecondImg}
            title={process.SecondTitle}
            text={process.SecondText}
          />
          <Step
            id={3}
            image={process.ThirdImg}
            title={process.ThirdTitle}
            text={process.ThirdText}
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
