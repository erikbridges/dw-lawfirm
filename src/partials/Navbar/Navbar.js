import React, { useState, useEffect, Fragment } from "react";
import classNames from "classnames";
import "./CSS/style.css";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [toggleNav, setToggleNav] = useState(false);
  function logit() {
    setScrollY(window.pageYOffset);
  }

  function changeToggleNav() {
    setToggleNav(!toggleNav);
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  return (
    <Fragment>
      <MediaQuery minWidth={968} minDeviceWidth={968}>
        {matches =>
          matches ? (
            <nav
              className={classNames({
                "nav-main": true,
                scrollStyle: scrollY !== 0 ? true : false
              })}
            >
              <div
                className={classNames({
                  "logo-nav": true,
                  scrollStyle: scrollY !== 0 ? true : false
                })}
              >
                <span>D.W LawFirm Services </span>
                <span className="slogen">Copyright & Business Services</span>
              </div>

              <div
                className={classNames({
                  "nav-container": true,
                  scrollStyle: scrollY !== 0 ? true : false
                })}
              >
                <Link to="/">Home</Link>
                <Link to="/about"> About</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </nav>
          ) : (
            <Fragment>
              <nav className="nav-mobile">
                <div className="logo-nav-mobile">
                  <span>D.W LawFirm Services </span>
                  <span className="slogen">Copyright & Business Services</span>
                </div>
                <div
                  className={classNames({ "nav-mobile-collapse": true})}
                  onClick={() => changeToggleNav()}
                >
                  <span />
                  <span />
                  <span />
                </div>

                <div   className={classNames({ "nav-container-mobile": true , "active" : toggleNav})} >
                  <div className="nav-wrapper-mobile">
                    <Link to="/" onClick={() => changeToggleNav()}>
                      Home
                    </Link>
                    <Link to="/about" onClick={() => changeToggleNav()}>
                      {" "}
                      About
                    </Link>
                    <Link to="/contact" onClick={() => changeToggleNav()}>
                      Contact
                    </Link>
                  </div>
                </div>
              </nav>
            </Fragment>
          )
        }
      </MediaQuery>
    </Fragment>
  );
}

export default Navbar;
