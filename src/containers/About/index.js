import React from "react";
import "./CSS/style.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faHospital,
  faFile,
  faIdCard
} from "@fortawesome/free-regular-svg-icons";
function Index() {
  return (
    <div className="about">
      <div className="about-banner">
        <div className="about-banner-header">
          <h1> About Us</h1>
        </div>
        <img className="about-image" src="./public/assets/images/about-banner.jpg" alt="aboutBanner" />
      </div>
      <section className="about-container sec-1">
        <h1>About The Firm</h1>
        <p>
          D.W LawFirm Services is a business and planning law firm attuned to
          the needs of and providing services for business entities, families
          and individuals. Founded by Mr.Quill in 2019 and joined by Ms.Moore in
          2020, the firm is proud to be licensed to serve clients in both
          Alabama and Atlanta. Our goal is to provide the best possible legal
          advice with genuine empathy for our clients involved.
        </p>
      </section>
      <section className="about-container">
        <Grid xs="center">
          <Row between="xs">
            <Col xs={12} md={6} lg={2}>
              <div className="bubble-circle">
                <FontAwesomeIcon icon={faCopyright} />
                <span>Copyright Paperwork</span>
              </div>
            </Col>
            <Col xs={12} md={6} lg={2}>
              <div className="bubble-circle">
                <FontAwesomeIcon icon={faHospital} />
                <span> Unexpected Accidents</span>
              </div>
            </Col> 
            <Col xs={12} md={6} lg={2}>
              <div className="bubble-circle">
                <FontAwesomeIcon icon={faFile} />
                <span>Register Business Paperwork</span>
              </div>
            </Col>
            <Col xs={12} md={6} lg={2}>
              <div className="bubble-circle">
                <FontAwesomeIcon icon={faIdCard} />
                <span>Fraud Protection</span>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    </div>
  );
}

export default Index;
