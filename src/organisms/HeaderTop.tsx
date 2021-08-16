import { useState } from "react";
import styles from "./HeaderTop.module.css";
import MediaQuery from "react-responsive";
import Modal from "react-modal";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

Modal.setAppElement("#root");

const HeaderTop = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.setAttribute("style", "overflow: hidden;");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.removeAttribute("style");
  };

  return (
    <div className={styles.header}>
      <a href="" className={styles.header_a}>
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/team-link-lp-picture/IMG/logo.jpg"
          alt="logo"
        />
      </a>
      <MediaQuery minWidth={768}>
        <div>
          <a href="">
            <h2 className={styles.login}>ログイン</h2>
          </a>
          <a href="">
            <h2 className={styles.ad}>掲載希望者はこちら</h2>
          </a>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <button onClick={openModal} className={styles.button}>
          <div className={styles.button_icon}>
            <ArrowBackIosIcon style={{ color: "white", cursor: "pointer" }} />
          </div>
          <h3 className={styles.button_h3}>掲載希望の方はこちら</h3>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <button onClick={closeModal} className={styles.close_icon}>
            <ArrowForwardIosIcon
              style={{ color: "black", cursor: "pointer" }}
            />
            <h3 className={styles.button_h3_black}>掲載希望の方はこちら</h3>
          </button>
          <div className={styles.item}>
            <a href="">
              <h3>Team Link サービス概要</h3>
            </a>
            <a href="">
              <h3>資料ダウンロード</h3>
            </a>
          </div>
          <div className={styles.modal_logo}>
            <a href="">
              <img
                src="https://s3-ap-northeast-1.amazonaws.com/team-link-lp-picture/IMG/logoMain.png"
                alt="logoMain"
              />
            </a>
          </div>
        </Modal>
      </MediaQuery>
    </div>
  );
};

const customStyles = {
  overlay: {
    top: "0",
    left: "0",
    right: "auto",
    bottom: "auto",
    width: "100%",
    height: "100%",
    zIndex: 6,
    border: "none",
    backgroundColor: "rgba(0, 0, 0, 0.56)",
    display: "block",
  },
  content: {
    top: "0",
    left: "30%",
    right: "0",
    bottom: "0",
    width: "70%",
    height: "100%",
    zIndex: 7,
    border: "none",
    borderRadius: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "block",
  },
};

export default HeaderTop;
