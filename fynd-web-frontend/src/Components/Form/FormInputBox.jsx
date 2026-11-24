import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import "./form-input-box.css";

export default function FormInputBox({
  id,
  labelText,
  type = "text",
  placeholderText,
}) {
  return (
    <div className="form-inputbox">
      <label htmlFor={id}>{labelText}</label>
      <SearchInput id={id} type={type} placeholderText={placeholderText} />
    </div>
  );
}
