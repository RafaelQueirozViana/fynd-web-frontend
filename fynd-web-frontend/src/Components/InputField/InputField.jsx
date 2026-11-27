import React from "react";
import "./input.css";

export default function InputField({...props}) {
  return (
    <input
      className="search-input"
      {...props}
     
    />
  );
}
