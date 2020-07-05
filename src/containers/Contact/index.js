import React from "react";
import "./CSS/style.css";

function Index(props) {
  return (
    <div className="contact">
      <div className="contact-banner">
        <div className="contact-banner-header">
          <h1> Contact Us</h1>
        </div>
        <img
          className="contact-image"
          src="./public/assets/images/contact-banner.jpg"
          alt="Contact banner"
        />
      </div>
      <section className="contact-section">
        <div className="map-contact"></div>
      </section>
      <section className="contact-section flex-container">
        <div className="flex-box">
          <h1>How Can We Help</h1>
          <p>
            D.W LawFirm Services is a business law firm practicing in the areas
            of business planning, legal rights and car incidents. We serve
            clients in Atlanta Metropolitan Area, and throughout Georgia. Let us
            know how we can help by completing the form on this page. Our office
            will get back to you promptly to set up a phone or in-person
            appointment to discuss your particular legal matter.
          </p>
        </div>
        <div className="flex-box">
          <form className="contact-form">
            <div className="input__wrap">
              <div className="input-label">
                <label for="name">Name</label>
                <span>*</span>
              </div>
              <input type="text" placeholder="name" />
            </div>
            <div className="input__wrap">
              <div className="input-label">
                <label for="email">Email</label>
                <span>*</span>
              </div>
              <input type="email" placeholder="email" />
            </div>
            <div className="input__wrap">
              <div className="input-label">
                <label for="message">Message</label>
                <span>*</span>
              </div>
              <textarea placeholder="Message"></textarea>
            </div>
            <div className="input__wrap">
              <button className="input-btn"> Submit </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Index;
