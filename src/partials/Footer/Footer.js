import React from "react";
import moment from "moment";
import "./CSS/style.css";
import { Link } from "@reach/router";
function Footer() {
  return (
    <footer className="footer">
      <span>
        &copy; {moment(new Date()).format("YYYY")} D.W Lawfirm Services{" "}
      </span>
      <div className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-logo">
        <span>D</span>
        <span>&</span>
        <span>W</span>
      </div>
    </footer>
  );
}

export default Footer;
