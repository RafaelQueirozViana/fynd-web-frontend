import React from "react";
import "./popup.css";

export default function PopupContainer({ isPopupOpen, children }) {
  return (
    <>
      <div className="popup-overlay "></div>
      <div className={"popup-container" + (isPopupOpen ? " active" : "")}>
        {children}
      </div>
    </>
  );
}
