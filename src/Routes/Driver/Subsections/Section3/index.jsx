import styles from "./index.module.scss";
import StepsMobile from "./Assets/Images/stepsMobile.svg";
import StepsTablet from "./Assets/Images/stepsTablet.svg";
import RiderMobile from "./Assets/Images/riderMobile.png";
import RiderTablet from "./Assets/Images/riderTablet.png";
import Button from "../../../../Components/General/Button/Button";

function Section3() {
  const stepsMobileStyle = {
    width: "90%",
    maxWidth: "300px",
    height: "auto",
  };
  const stepsTabletStyle = {
    width: "197px",
    height: "auto",
  };
  const stepsDesktopStyle = {
    width: "370px",
    height: "auto",
  };
  const riderMobileStyle = {
    width: "90%",
    maxWidth: "500px",
    height: "auto",
  };
  const riderTabletStyle = {
    width: "170px",
    height: "auto",
  };
  const riderDesktopStyle = {
    width: "319px",
    height: "auto",
  };

  return (
    <div className={styles["main-container"]}>
      <h4 data-aos="fade-down-right">How To Get Started</h4>
      <p data-aos="fade-up">
        Get started in{" "}
        <span className={styles["simple-steps"]}>
          3 simple steps<span className={styles["bar"]}></span>
        </span>
      </p>
      <div className={styles["images-container"]}>
        <img
          data-aos={window.innerWidth >= 768 ? "fade-in" : "fade-in"}
          className={styles["driver"]}
          src={window.innerWidth < 768 ? RiderMobile : RiderTablet}
          alt=""
          style={
            window.innerWidth < 768
              ? riderMobileStyle
              : window.innerWidth < 1200
              ? riderTabletStyle
              : riderDesktopStyle
          }
        />
        <img
          data-aos={window.innerWidth >= 768 ? "fade-in" : "fade-in"}
          className={styles["step"]}
          src={window.innerWidth < 768 ? StepsMobile : StepsTablet}
          alt=""
          style={
            window.innerWidth < 768
              ? stepsMobileStyle
              : window.innerWidth < 1200
              ? stepsTabletStyle
              : stepsDesktopStyle
          }
        />
      </div>
      <div className={styles["button-container"]}>
        <Button buttonName="Join as a driver" />
      </div>
    </div>
  );
}

export default Section3;
