import React, {useState, useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="toggle-icon">
          {isChecked ? (
            <i className="fas fa-moon moon-icon"></i>
          ) : (
            <i className="fas fa-sun sun-icon"></i>
          )}
        </span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
