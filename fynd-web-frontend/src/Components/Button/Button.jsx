import React from "react";
import "./button.css";

export default function Button({ text, radius }) {
  return <button className="primary-button">{text}</button>;
}
