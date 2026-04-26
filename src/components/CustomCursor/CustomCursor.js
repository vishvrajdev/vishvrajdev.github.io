import React, {useState, useEffect} from "react";
import "./CustomCursor.scss";

const CustomCursor = () => {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({x: e.clientX, y: e.clientY});
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`custom-cursor ${isPointer ? "pointer" : ""}`}
      style={{left: `${position.x}px`, top: `${position.y}px`}}
    >
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
    </div>
  );
};

export default CustomCursor;
