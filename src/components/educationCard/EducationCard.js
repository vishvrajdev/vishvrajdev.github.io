import React, {useState, createRef, useContext} from "react";
import "./EducationCard.scss";
import ColorThief from "colorthief";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();
  const {isDark} = useContext(StyleContext);

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark hover-tilt card-glow" : "experience-card hover-tilt card-glow"}>
      <div style={{background: school.color ? school.color : rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{school.schoolName}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={school.logo}
          alt={school.schoolName}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {school.subHeader}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {school.duration}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {school.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={school.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
