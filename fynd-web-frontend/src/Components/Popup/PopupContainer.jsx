import React from "react";
import "./popup.css";

export default function PopupContainer({ isPopupOpen, togglePopup, children }) {
  return (
    <>
      <div className="popup-overlay "></div>
      <div className={"popup-container" + (isPopupOpen ? " active" : "")}>
         <button className="close-popup-btn" onClick={togglePopup}>X</button>
        {children}
      </div>
    </>
  );
}
