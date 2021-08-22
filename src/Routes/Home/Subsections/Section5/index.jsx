
import styles from "./index.module.scss";
import Mobile from "./Assets/Images/mobile.png";
import Tablet from "./Assets/Images/tablet.png";
import Layout from "../../../../Components/General/Layout/Layout";

function Section5() {
  const mobileStyle = {
    width: "90%",
    maxWidth: "500px",
    height: "auto",
  };
  const tabletStyle = {
    width: "316px",
    height: "auto",
  };
  const desktopStyle = {
    width: "496px",
    height: "auto",
  };
  return (
    <div className={styles["main-container"]}>
      <div className={styles.sectionFive}>
        <Layout
          header="Food delivery with a social side"
          content="See what your friends and loved ones are up to and who they buy from."
          dot={false}
          image={Mobile}
          headerAnimation={window.innerWidth < 768 ? "flip-down" : ""}
          contentAnimation={window.innerWidth < 768 ? "slide-up" : ""}
          imageAnimation={window.innerWidth < 768 ? "zoom-out-up" : ""}
          buttonAnimation={window.innerWidth < 768 ? "fade-in" : ""}
          layoutAnimation={window.innerWidth >= 768 ? "slide-right" : ""}
          buttonName="Download now"
          imageStyle={mobileStyle}
        />
        <img
          data-aos={window.innerWidth >= 768 ? "fade-in" : ""}
          className={styles.image}
          src={Tablet}
          alt=""
          style={window.innerWidth < 1200 ? tabletStyle : desktopStyle}
        />
      </div>
    </div>
  );
}

export default Section5;
