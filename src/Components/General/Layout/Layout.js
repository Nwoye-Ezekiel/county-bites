import React, { useEffect } from "react";
import styles from "./Layout.module.scss";
import Button from "../Button/Button";
import Aos from "aos";
import "aos/dist/aos.css";

function Layout({
  header,
  dot,
  content,
  image,
  layoutAnimation,
  headerAnimation,
  contentAnimation,
  imageAnimation,
  buttonAnimation,
  buttonName,
  imageStyle,
}) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      data-aos={layoutAnimation ? layoutAnimation : ""}
      className={styles.container}
    >
      <div
        data-aos={headerAnimation ? headerAnimation : ""}
        className={styles.header}
      >
        {header}
        {dot ? <span className={styles.dot}>.</span> : null}
      </div>
      <div
        data-aos={contentAnimation ? contentAnimation : ""}
        className={styles.content}
      >
        {content}
      </div>
      <div
        data-aos={imageAnimation ? imageAnimation : ""}
        className={styles.imageContainer}
      >
        <img src={image} style={imageStyle} alt="" />
      </div>
      <div
        data-aos={buttonAnimation ? buttonAnimation : ""}
        data-aos-anchor-placement="bottom-bottom"
        className={styles.buttonContainer}
      >
        <Button buttonName={buttonName}/>
      </div>
    </div>
  );
}

export default Layout;
