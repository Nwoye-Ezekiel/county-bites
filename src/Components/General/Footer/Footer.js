import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../../../Icons/logo.svg";
import Instagram from "../../../Icons/Instagram.svg";
import Twitter from "../../../Icons/Twitter.svg";
import Facebook from "../../../Icons/Facebook.svg";
import LinkedIn from "../../../Icons/LinkedIn.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img className={styles.logo} src={Logo} alt="" />
          <p className={styles.copyright1}>
            Copyright © 2021 County Bites | All rights reserved
          </p>
          <div className={styles.copyright2Container}>
            <p className={styles.copyright2}>Copyright © 2021 County Bites.</p>
            <p className={styles.copyright2}>All rights reserved</p>
          </div>

          <div className={styles.section}>
            <div className={styles.socials1}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/countybites/?hl=en"
              >
                <img className={styles.social} src={Instagram} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100069734265780"
              >
                <img className={styles.social} src={Facebook} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/CountyBites"
              >
                <img className={styles.social} src={Twitter} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/county-bites"
              >
                <img className={styles.social} src={LinkedIn} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.sections}>
          <div className={styles.section}>
            <h4 className={styles.header}>Company</h4>
            <div className={styles.links}>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>About us</p>
              </Link>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Blog</p>
              </Link>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Explore</p>
              </Link>
              <Link className={styles.linker} to="/locations">
                <p className={styles.link}>Locations</p>
              </Link>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Contact us</p>
              </Link>
            </div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.header}>Support</h4>
            <div className={styles.links}>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Merchant Login</p>
              </Link>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Driver Pay</p>
              </Link>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Investors</p>
              </Link>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Privacy Policy</p>
              </Link>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Terms of Service</p>
              </Link>
            </div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.header}>Community</h4>
            <div className={styles.links}>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Merchant of the Month</p>
              </Link>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Drivers of the Month</p>
              </Link>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Recipes</p>
              </Link>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Events</p>
              </Link>
              <Link className={styles.linker} to="/">
                <p className={styles.link}>Press</p>
              </Link>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.socials2}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/countybites/?hl=en"
              >
                <img className={styles.social} src={Instagram} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100069734265780"
              >
                <img className={styles.social} src={Facebook} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/CountyBites"
              >
                <img className={styles.social} src={Twitter} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/county-bites"
              >
                <img className={styles.social} src={LinkedIn} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
