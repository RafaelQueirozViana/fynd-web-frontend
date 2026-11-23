import React from "react";
import "./button.css";

export default function Button({ text, subclass }) {
  return (
    <button className={"primary-button " + (subclass ? subclass : "")}>
      {text}
    </button>
  );
}
