import styles from "./Step.module.css";

interface PROPS {
  id: number;
  image: string;
  title: string;
  text: string;
}

const Step: React.FC<PROPS> = ({ id, image, title, text }) => {
  return (
    <div className={styles.step}>
      <img src={image} style={{ width: "60px", height: "auto" }} alt={image} />
      <p className={styles.step_p}>STEP 0{id}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Step;
