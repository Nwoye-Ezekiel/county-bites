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
    width: "374px",
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
          header="Download our app and start selling right away!"
          content="Don’t wait another moment to get your goods in front of millions of people at the click of a button."
          dot={false}
          image={Image}
          headerAnimation={window.innerWidth < 768 ? "fade-in" : ""}
          contentAnimation={window.innerWidth < 768 ? "fade-in" : ""}
          imageAnimation={window.innerWidth < 768 ? "slide-up" : ""}
          buttonAnimation={window.innerWidth < 768 ? "slide-up" : ""}
          layoutAnimation={window.innerWidth >= 768 ? "fade-in" : ""}
          buttonName="Download app"
          imageStyle={mobileStyle}
        />
        <img
          data-aos={window.innerWidth >= 768 ? "fade-up-left" : ""}
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
