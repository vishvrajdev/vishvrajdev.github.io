import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import contactAnimation from "../../assets/lottie/contact-animation.json";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-section-container">
          <div className="contact-div-main">
            <div className="contact-header">
              <h1 className="contact-title">{contactInfo.title}</h1>

              {/* Availability Badge */}
              {contactInfo.availabilityBadge && (
                <div className={isDark ? "dark-mode availability-badge" : "availability-badge"}>
                  <span className="availability-dot"></span>
                  {contactInfo.availabilityBadge}
                </div>
              )}

              <p
                className={
                  isDark
                    ? "dark-mode contact-subtitle"
                    : "contact-subtitle"
                }
              >
                {contactInfo.subtitle}
              </p>
              <div
                className={
                  isDark ? "dark-mode contact-text-div" : "contact-text-div"
                }
              >
                {contactInfo.number && (
                  <a
                    className={isDark ? "dark-mode contact-detail-btn" : "contact-detail-btn"}
                    href={"tel:" + contactInfo.number}
                  >
                    <i className="fas fa-phone-alt"></i> {contactInfo.number}
                  </a>
                )}
                <a
                  className={isDark ? "dark-mode contact-detail-btn contact-email-btn" : "contact-detail-btn contact-email-btn"}
                  href={"mailto:" + contactInfo.email_address}
                >
                  <i className="fas fa-envelope"></i> {contactInfo.email_address}
                </a>
                <br />
                <div className="contact-social-media">
                  <SocialMedia />
                </div>
              </div>
            </div>
            <div className="contact-image-div">
              <DisplayLottie animationData={contactAnimation} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
