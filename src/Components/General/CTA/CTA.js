import React, { useEffect } from "react";
import styles from "./CTA.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";

import Phone1 from "./Assets/Images/phone1.png";
import Phone2 from "./Assets/Images/phone2.png";

import GoogleBlack from "./Assets/Buttons/GoogleBlack.png";
import GoogleWhite from "./Assets/Buttons/GoogleWhite.png";

import AppStoreBlack from "./Assets/Buttons/AppStoreBlack.png";
import AppStoreWhite from "./Assets/Buttons/AppStoreWhite.png";
import { useLocation } from "react-router-dom";

function CTA() {
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles["container-wrapper"]}>
      <div className={styles["main-container"]}>
        <div
          data-aos={window.innerWidth >= 768 ? "slide-right" : ""}
          className={styles["header"]}
        >
          <h4>
            {location.pathname === "/merchant"
              ? "Download Our Merchant App"
              : location.pathname === "/driver"
              ? "Download Our Drivers App"
              : "Download Our App"}
          </h4>

          <div className={styles["buttons-container"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.countybites.user&hl=en_US&gl=US"
            >
              <img
                data-aos={window.innerWidth < 768 ? "fade-in" : ""}
                src={window.innerWidth < 768 ? GoogleBlack : GoogleWhite}
                alt=""
              />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://apps.apple.com/il/app/county-bites/id1523007580"
            >
              <img
                data-aos={window.innerWidth < 768 ? "fade-in" : ""}
                src={window.innerWidth < 768 ? AppStoreBlack : AppStoreWhite}
                alt=""
              />
            </a>
          </div>
        </div>

        <div className={styles["image-container"]}>
          <img
            data-aos={window.innerWidth >= 768 ? "slide-left" : "slide-right"}
            src={
              window.innerWidth < 768
                ? location.pathname === "/driver"
                  ? Phone2
                  : Phone1
                : window.innerWidth < 1200
                ? Phone1
                : location.pathname === "/driver"
                ? Phone2
                : Phone1
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CTA;
