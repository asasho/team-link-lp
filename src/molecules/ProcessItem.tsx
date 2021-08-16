import React from "react";
import styles from "./ProcessItem.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { editProcess } from "../features/process/processSlice";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface PROPS {
  id: number;
  title: string;
  FirstImg: string;
  FirstTitle: string;
  FirstText: string;
  SecondImg: string;
  SecondTitle: string;
  SecondText: string;
  ThirdImg: string;
  ThirdTitle: string;
  ThirdText: string;
  left: string;
}

const ProcessItem: React.FC<PROPS> = ({
  id,
  title,
  FirstImg,
  FirstTitle,
  FirstText,
  SecondImg,
  SecondTitle,
  SecondText,
  ThirdImg,
  ThirdTitle,
  ThirdText,
  left,
}) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div
      className={styles.process}
      onClick={() => {
        dispatch(
          editProcess({
            id: id,
            title: title,
            FirstImg: FirstImg,
            FirstTitle: FirstTitle,
            FirstText: FirstText,
            SecondImg: SecondImg,
            SecondTitle: SecondTitle,
            SecondText: SecondText,
            ThirdImg: ThirdImg,
            ThirdTitle: ThirdTitle,
            ThirdText: ThirdText,
            left: left,
          })
        );
      }}
    >
      <div className={styles.number}>
        <h1>0{id}</h1>
      </div>
      <p>{title}</p>
      <ExpandMoreIcon style={{ fontSize: "20px" }} />
    </div>
  );
};

export default ProcessItem;
