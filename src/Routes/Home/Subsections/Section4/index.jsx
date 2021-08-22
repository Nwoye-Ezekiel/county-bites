
import styles from "./index.module.scss";
import Mobile from "./Assets/Images/mobile.png";
import Tablet from "./Assets/Images/tablet.png";
import Layout from "../../../../Components/General/Layout/Layout";

function Section4() {
  const mobileStyle = {
    width: "90%",
    maxWidth: "500px",
    height: "auto",
  };
  const tabletStyle = {
    width: "328px",
    height: "auto",
  };
  const desktopStyle = {
    width: "558px",
    height: "auto",
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles.sectionFour}>
        <img
          data-aos={window.innerWidth >= 768 ? "fade-in" : ""}
          className={styles.image}
          src={Tablet}
          alt=""
          style={window.innerWidth < 1200 ? tabletStyle : desktopStyle}
        />
        <Layout
          header="Reduced Commission from Restaurants"
          content="Our low-cost commission structure deceases high inflation rate of meals. We are making covering-in affordable again."
          dot={false}
          image={Mobile}
          headerAnimation={window.innerWidth < 768 ? "zoom-in-down" : ""}
          contentAnimation={window.innerWidth < 768 ? "fade-up" : ""}
          imageAnimation={window.innerWidth < 768 ? "zoom-in" : ""}
          buttonAnimation={window.innerWidth < 768 ? "fade-in" : ""}
          layoutAnimation={window.innerWidth >= 768 ? "slide-left" : ""}
          buttonName="Download now"
          imageStyle={mobileStyle}
        />
      </div>
    </div>
  );
}

export default Section4;
