import React, {useEffect} from "react";
import "./Top.scss";

export default function Top() {
  function TopEvent() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function scrollFunction() {
    const topButton = document.getElementById("topButton");
    if (!topButton) return;
    
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      topButton.classList.add("visible");
    } else {
      topButton.classList.remove("visible");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <button 
      onClick={TopEvent} 
      id="topButton" 
      className="back-to-top"
      title="Go to top"
    >
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}
