import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {Fade} from "react-reveal";
import educationAnimation from "../../assets/lottie/education-animation.json";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <Fade bottom duration={1000} distance="20px">
          <div className="education-main-content">
            <div className="education-lottie-div">
              <DisplayLottie animationData={educationAnimation} />
            </div>
            <div className="education-text-div">
              <h1 className="education-heading">Education</h1>
              <div className="education-cards-div">
                {educationInfo.schools.map((school, index) => (
                  <EducationCard key={index} school={school} />
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
