import React from "react";
import SearchInput from "../InputField/InputField";
import "./form-input-box.css";

export default function FormInputBox({
  inputId,
  labelText,
  ...props
}) {
  return (
    <div className="form-inputbox">
      <label htmlFor={inputId}>{labelText}</label>
      <SearchInput id={inputId} {...props}/>
    </div>
  );
}
