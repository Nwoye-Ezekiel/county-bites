import React from "react";
import styles from "./Button.module.scss";
import Arrow from "../../../Icons/arrow.svg";
import { isIOS, isMacOs } from "react-device-detect";

function Button({ buttonName }) {
  return (
    <a
    className={styles.buttonLink}
      target="_blank"
      rel="noreferrer"
      href={
        isIOS || isMacOs
          ? "https://apps.apple.com/il/app/county-bites/id1523007580"
          : "https://play.google.com/store/apps/details?id=com.countybites.user&hl=en_US&gl=US"
      }
    >
      <div className={styles.container}>
        <span className={styles.content}>{buttonName}</span>
        <img className={styles.arrow} src={Arrow} alt="" />
      </div>
    </a>
  );
}

export default Button;
