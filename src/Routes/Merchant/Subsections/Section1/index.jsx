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
    width: "348px",
    height: "auto",
  };
  const desktopStyle = {
    width: "496px",
    height: "auto",
  };
  return (
    <div className={styles["main-container"]}>
      <div className={styles.Hero}>
        <Layout
          header="Sell with the winning team."
          content="As a restaurant owner, you have full visiblity into your performance."
          dot={false}
          image={Image}
          layoutAnimation={window.innerWidth >= 768 ? "slide-down" : ""}
          buttonName="Download app"
          imageStyle={mobileStyle}
        />
        <img
          data-aos={window.innerWidth >= 768 ? "slide-up" : ""}
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
