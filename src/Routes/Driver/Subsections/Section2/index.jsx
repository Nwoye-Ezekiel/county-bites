import styles from "./index.module.scss";
import MobilePayment from "./Assets/Images/mobilePayment.svg";
import TabletPayment from "./Assets/Images/tabletPayment.svg";
import Man from "./Assets/Images/man.png";

function Section2() {
  const paymentMobileStyle = {
    width: "90%",

    height: "auto",
  };
  const paymentTabletStyle = {
    width: "378px",
    height: "auto",
  };
  const paymentDesktopStyle = {
    width: "705px",
    height: "auto",
  };
  const manTabletStyle = {
    width: "319px",
    height: "auto",
  };
  const manDesktopStyle = {
    width: "596px",
    height: "auto",
  };
  return (
    <div className={styles["main-container"]}>
      <h4 data-aos={"zoom-in-up"}>Our Payment Structure</h4>
      <div className={styles["images-container"]}>
        <img
          data-aos={"fade-in"}
          className={styles["man"]}
          src={Man}
          alt=""
          style={window.innerWidth < 1200 ? manTabletStyle : manDesktopStyle}
        />
        <img
          data-aos={"fade-in"}
          className={styles["payment"]}
          src={window.innerWidth < 768 ? MobilePayment : TabletPayment}
          alt=""
          style={
            window.innerWidth < 768
              ? paymentMobileStyle
              : window.innerWidth < 1200
              ? paymentTabletStyle
              : paymentDesktopStyle
          }
        />
      </div>
    </div>
  );
}

export default Section2;
