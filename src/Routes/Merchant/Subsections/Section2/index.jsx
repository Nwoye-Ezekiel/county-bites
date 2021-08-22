import styles from "./index.module.scss";
import Mobile from "./Assets/Images/mobile.png";
import Tablet from "./Assets/Images/tablet.png";
import Layout from "../../../../Components/General/Layout/Layout";

function Section2() {
  const mobileStyle = {
    width: "90%",
    maxWidth: "500px",
    height: "auto",
  };
  const tabletStyle = {
    width: "234px",
    height: "auto",
  };
  const desktopStyle = {
    width: "496px",
    height: "auto",
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles.sectionTwo}>
        <img
          data-aos={window.innerWidth >= 768 ? "fade-up-right" : ""}
          className={styles.image}
          src={Tablet}
          alt=""
          style={window.innerWidth < 1200 ? tabletStyle : desktopStyle}
        />
        <Layout
          header="Manage orders from your phone."
          content="With our Merchants app, you never need to worry about keeping track and managing your orders again."
          dot={false}
          image={Mobile}
          headerAnimation={window.innerWidth < 768 ? "zoom-in-down" : ""}
          contentAnimation={window.innerWidth < 768 ? "zoom-in" : ""}
          imageAnimation={window.innerWidth < 768 ? "slide-left" : ""}
          buttonAnimation={window.innerWidth < 768 ? "fade-in" : ""}
          layoutAnimation={window.innerWidth >= 768 ? "fade-up-left" : ""}
          buttonName="Download app"
          imageStyle={mobileStyle}
        />
      </div>
    </div>
  );
}

export default Section2;
