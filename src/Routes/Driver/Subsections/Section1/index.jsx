import styles from "./index.module.scss";
import Image from "./Assets/Images/image.png";
import Layout from "../../../../Components/General/Layout/Layout";

function Section1() {
  const mobileStyle = {
    width: "90%",
    maxWidth: "500px",
    height: "auto",
  };
  const tabletStyle = {
    width: "389px",
    height: "auto",
  };
  const desktopStyle = {
    width: "603px",
    height: "auto",
  };
  return (
    <div className={styles["main-container"]}>
      <div className={styles.section1}>
        <Layout
          header="Our drivers earn more than any other platform"
          content="Our tiered-pay structure allows drivers to earn more, the more they deliver."
          dot={true}
          image={Image}
          layoutAnimation={window.innerWidth >= 768 ? "slide-right" : ""}
          buttonName="Join as a driver"
          imageStyle={mobileStyle}
        />
        <img
          data-aos={window.innerWidth >= 768 ? "slide-left" : ""}
          className={styles.image}
          src={Image}
          alt=""
          style={window.innerWidth < 1200 ? tabletStyle : desktopStyle}
        />
      </div>
    </div>
  );
}

export default Section1;
