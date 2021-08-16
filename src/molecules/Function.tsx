import React from "react";
import styles from "./Function.module.css";
import Btn from "../atoms/Button";
import ReactPlayer from "react-player";
import MediaQuery from "react-responsive";

interface PROPS {
  title: string;
  content: string;
  button: string;
  movie: string;
  order: string;
}

const FunctionText: React.FC<PROPS> = ({
  title,
  content,
  button,
  movie,
  order,
}) => {
  return (
    <div className={styles.function} style={{ flexFlow: `${order}` }}>
      <MediaQuery minWidth={600}>
        <ReactPlayer
          url={movie}
          reload="auto"
          playing={true}
          autoPlay={true}
          muted={true}
          loop={true}
          style={{ objectFit: "cover" }}
          width="600px"
          height="auto"
          controls={false}
          playsinline={true}
        />
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <ReactPlayer
          url={movie}
          reload="auto"
          playing={true}
          autoPlay={true}
          muted={true}
          loop={true}
          style={{ objectFit: "cover" }}
          width="95%"
          height="auto"
          controls={false}
          playsinline={true}
        />
      </MediaQuery>
      <div className={styles.function_div}>
        <h1>{title}</h1>
        <h3>{content}</h3>
        <Btn
          color="white"
          background="black"
          display="block"
          text={button}
          linkTo=""
        />
      </div>
    </div>
  );
};

export default FunctionText;
