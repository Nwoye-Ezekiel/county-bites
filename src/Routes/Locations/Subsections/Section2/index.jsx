import styles from "./index.module.scss";

function Section2() {
  return (
    <div className={styles["container-wrapper"]}>
      <div className={styles["main-container"]}>
        <div className={styles["location"]}>
          <h4>
            Florida<span className={styles["bar"]}></span>
          </h4>
          <p>Coming 2022</p>
        </div>
        <div className={styles["location"]}>
          <h4>
            Alabama<span className={styles["bar"]}></span>
          </h4>
          <p>Coming 2022</p>
        </div>
        <div className={styles["location"]}>
          <h4>
            South Carolina<span className={styles["bar"]}></span>
          </h4>
          <p>Coming 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
