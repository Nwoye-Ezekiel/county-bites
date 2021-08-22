import styles from "./index.module.scss";
import Mobile from "./Assets/Images/mobile.png";
import Tablet from "./Assets/Images/tablet.png";
import Layout from "../../../../Components/General/Layout/Layout";

function Section1() {
  const mobileStyle = {
    width: "90%",
    maxWidth: "500px",
    height: "auto",
  };
  const tabletStyle = {
    width: "286px",
    height: "auto",
  };
  const desktopStyle = {
    width: "496px",
    height: "auto",
  }; 

  return (
    <div className={styles["main-container"]}>
      <div className={styles.section1}>
        <div className={styles["layout-container"]}>
          <Layout
            header="Your favorite meals delivered"
            content="The social food and grocery delivery platform"
            dot={true}
            image={Mobile}
            layoutAnimation={window.innerWidth >= 768 ? "slide-up" : ""}
            buttonName="Download now"
            imageStyle={mobileStyle}
          />
        </div>
        <img
          data-aos={window.innerWidth >= 768 ? "slide-left" : ""}
          className={styles.image}
          src={Tablet}
          alt=""
          style={window.innerWidth < 1200 ? tabletStyle : desktopStyle}
        />
      </div>
    </div>
  );
}

export default Section1;
