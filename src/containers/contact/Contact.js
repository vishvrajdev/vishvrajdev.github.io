import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>

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
                  : "subTitle contact-subtitle"
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
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
