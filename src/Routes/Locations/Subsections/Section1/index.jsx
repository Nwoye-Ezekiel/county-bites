import styles from "./index.module.scss";

function Section1() {
  return (
    <div className={styles["container-wrapper"]}>
      <div className={styles["main-container"]}>
        <div className={styles["header"]}>
          <h4>
            Find Our Locations By{" "}
            <span>
              State<span className={styles["bar"]}></span>
            </span>
          </h4>
          <p>The social food and grocery delivery platform</p>
        </div>

        <div className={styles["locations-container"]}>
          <h4>
            Georgia<span className={styles["bar"]}></span>
          </h4>
          <div className={styles["locations"]}>
            <div className={styles["location-set"]}>
              <p>Gray</p>
              <p>Griffin</p>
              <p>Hampton</p>
              <p>Locust Grove</p>
              <p>LoveJoy</p>
            </div>
            <div className={styles["location-set"]}>
              <p>Macon</p>
              <p>McDonough</p>
              <p>Milledgeville</p>
              <p>Stockbridge</p>
              <p>Warner Robins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
