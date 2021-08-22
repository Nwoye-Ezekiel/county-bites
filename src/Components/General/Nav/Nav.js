import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import styles from "./Nav.module.scss";
import Logo from "../../../Icons/logo.svg";
import CloseBtn from "../../../Icons/closeBtn.svg";
import Hamburger from "../../../Icons/hamburger.svg";
import Calling from "../../../Icons/Calling.svg";
import { Link } from "react-router-dom";

function Nav() {
  let body = document.body,
    html = document.documentElement;

  const location = useLocation();
  const history = useHistory();
  const [toggle, setToggle] = useState(false);

  function toggleHandler() {
    setToggle(!toggle);
    if (toggle === false) {
      noScroll();
    } else {
      scroll();
    }
  }
  function noScroll() {
    html.style.cssText = "overflow:hidden;height:100%;";
    body.style.cssText = "overflow:hidden;height:100%;";
  }
  function scroll() {
    body.style.cssText = "overflow:auto;height:auto;";
    html.style.cssText = "overflow:auto;height:auto;";
  }

  function goHome() {
    history.push("/");
    setToggle(false);
  }

  return (
    <div className={styles.containerWrapper}>
      <div
        className={`${styles.container} ${toggle ? styles.down : styles.up} ${
          location.pathname === "/" &&
          window.innerWidth >= 768 &&
          window.innerWidth < 1200
            ? styles.white
            : ""
        }`}
      >
        <div
          className={`${styles.menu} ${
            toggle ? `${styles.open} ${styles.fixed}` : styles.close
          }`}
        >
          {/* -- dropdown menu header -- */}
          <div className={styles.header}>
            <img onClick={goHome} className={styles.logo} src={Logo} alt="" />
            <img
              onClick={toggleHandler}
              className={styles.closeBtn}
              src={CloseBtn}
              alt=""
            />
          </div>
          {/* -- dropdown menu header -- */}

          {/* -- dropdown menu links -- */}
          <div
            onClick={toggleHandler}
            className={styles.linkContainer}
            style={
              location.pathname === "/" ? { backgroundColor: "#fe4e26" } : {}
            }
          >
            <Link
              className={styles.linker}
              to="/"
              style={
                location.pathname === "/"
                  ? {
                      paddingLeft: "0",
                      width: "calc(100% - 48px)",
                      borderBottom: "1px #FFF8F6 solid",
                    }
                  : {}
              }
            >
              <div
                className={styles.link}
                style={location.pathname === "/" ? { color: "white" } : {}}
              >
                Home
              </div>
            </Link>
          </div>

          <div
            onClick={toggleHandler}
            className={styles.linkContainer}
            style={
              location.pathname === "/merchant"
                ? { backgroundColor: "#fe4e26" }
                : {}
            }
          >
            <Link
              className={styles.linker}
              to="/merchant"
              style={
                location.pathname === "/merchant"
                  ? {
                      paddingLeft: "0",
                      width: "calc(100% - 48px)",
                      borderBottom: "1px #FFF8F6 solid",
                    }
                  : {}
              }
            >
              <div
                className={styles.link}
                style={
                  location.pathname === "/merchant" ? { color: "white" } : {}
                }
              >
                Merchant
              </div>
            </Link>
          </div>

          <div
            onClick={toggleHandler}
            className={styles.linkContainer}
            style={
              location.pathname === "/driver"
                ? { backgroundColor: "#fe4e26" }
                : {}
            }
          >
            <Link
              className={styles.linker}
              to="/driver"
              style={
                location.pathname === "/driver"
                  ? {
                      paddingLeft: "0",
                      width: "calc(100% - 48px)",
                      borderBottom: "1px #FFF8F6 solid",
                    }
                  : {}
              }
            >
              <div
                className={styles.link}
                style={
                  location.pathname === "/driver" ? { color: "white" } : {}
                }
              >
                Driver
              </div>
            </Link>
          </div>

          <div
            onClick={toggleHandler}
            className={styles.linkContainer}
            style={
              location.pathname === "/locations"
                ? { backgroundColor: "#fe4e26" }
                : {}
            }
          >
            <Link
              className={styles.linker}
              to="/locations"
              style={
                location.pathname === "/locations"
                  ? {
                      paddingLeft: "0",
                      width: "calc(100% - 48px)",
                      borderBottom: "1px #FFF8F6 solid",
                    }
                  : {}
              }
            >
              <div
                className={styles.link}
                style={
                  location.pathname === "/locations" ? { color: "white" } : {}
                }
              >
                Location
              </div>
            </Link>
          </div>
        </div>
        {/* -- dropdown menu links -- */}

        <img
          onClick={goHome}
          className={`${styles.logo} ${toggle && styles.disappear}`}
          src={Logo}
          alt=""
        />
        <div className={styles.icons}>
          <img
            onClick={toggleHandler}
            className={`${styles.hamburger} ${toggle && styles.disappear}`}
            src={Hamburger}
            alt=""
          />
        </div>

        {/* -- desktop menu links -- */}
        <div className={styles.links}>
          <Link className={styles.linker} to="/">
            <div
              className={`${styles.link} ${
                location.pathname === "/" ? styles.linkActive : ""
              }`}
            >
              Home
            </div>
          </Link>

          <Link className={styles.linker} to="/merchant">
            <div
              className={`${styles.link} ${
                location.pathname === "/merchant" ? styles.linkActive : ""
              }`}
            >
              Merchant
            </div>
          </Link>

          <Link className={styles.linker} to="/driver">
            <div
              className={`${styles.link} ${
                location.pathname === "/driver" ? styles.linkActive : ""
              }`}
            >
              Driver
            </div>
          </Link>

          <Link className={styles.linker} to="/locations">
            <div
              className={`${styles.link} ${
                location.pathname === "/locations" ? styles.linkActive : ""
              }`}
            >
              Location
            </div>
          </Link>
        </div>

        <span className={styles["contact-container"]}>
          <a href="tel:+1478-607-1131">
            <div className={styles.contact}>
              <img src={Calling} alt="" />
              <span className={styles.number}>+1 (478)-607-1131</span>
            </div>
          </a>
        </span>
        {/* -- desktop menu links -- */}
      </div>
    </div>
  );
}

export default Nav;
