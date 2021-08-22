import styles from "./index.module.scss";
import Image from "./Assets/Images/image.png";
import Layout from "../../../../Components/General/Layout/Layout";

function Section3() {
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
    width: "558px",
    height: "auto",
  };
  return (
    <div className={styles["main-container"]}>
      <div className={styles.sectionThree}>
        <Layout
          header="Combined Food and Grocery"
          content="Order your eggs and milk, or your Tuesday night tacos. All from our app. "
          dot={false}
          image={Image}
          headerAnimation={window.innerWidth < 768 ? "fade-down-right" : ""}
          contentAnimation={window.innerWidth < 768 ? "fade-down-left" : ""}
          imageAnimation={window.innerWidth < 768 ? "fade-up" : ""}
          buttonAnimation={window.innerWidth < 768 ? "fade-in" : ""}
          layoutAnimation={window.innerWidth >= 768 ? "slide-right" : ""}
          buttonName="Download now"
          imageStyle={mobileStyle}
        />
        <img
          data-aos={window.innerWidth >= 768 ? "fade-in" : ""}
          className={styles.image}
          src={Image}
          alt=""
          style={window.innerWidth < 1200 ? tabletStyle : desktopStyle}
        />
      </div>
    </div>
  );
}

export default Section3;
