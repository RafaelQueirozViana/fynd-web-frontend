import React from "react";
import "./button.css";

export default function Button({ text, subclass = "", onClick }) {
  return (
    <button className={"primary-button " + subclass} onClick={onClick}>
      {text}
    </button>
  );
}
