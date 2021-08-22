import styles from "./index.module.scss";
import Image from "./Assets/Images/image.png";
import Layout from "../../../../Components/General/Layout/Layout";

function Section2() {
  const mobileStyle = {
    width: "90%",
    maxWidth: "500px",
    height: "auto",
  };
  const tabletStyle = {
    width: "385px",
    height: "auto",
  };
  const desktopStyle = {
    width: "620px",
    height: "auto",
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles["circle"]}></div>
      <div className={styles.sectionTwo}>
        <img
          data-aos={window.innerWidth >= 768 ? "fade-in" : ""}
          className={styles.image}
          src={Image}
          alt=""
          style={window.innerWidth < 1200 ? tabletStyle : desktopStyle}
        />
        <div className={styles["layout-container"]}>
          <Layout
            header="We make deliveries possible. Anywhere!"
            content="Irrespective of your location. We’ve got something for everyone. "
            dot={false}
            image={Image}
            headerAnimation={window.innerWidth < 768 ? "fade-in" : ""}
            contentAnimation={window.innerWidth < 768 ? "fade-in" : ""}
            imageAnimation={window.innerWidth < 768 ? "slide-up" : ""}
            buttonAnimation={window.innerWidth < 768 ? "fade-in" : ""}
            layoutAnimation={window.innerWidth >= 768 ? "slide-left" : ""}
            buttonName="Download now"
            imageStyle={mobileStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
