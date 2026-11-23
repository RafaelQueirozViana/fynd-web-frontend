import React from "react";
import "./searchInput.css";

export default function SearchInput({
  type = "text",
  id = "",
  placeholderText,
}) {
  return (
    <input
      type={type}
      id={id}
      className="search-input"
      placeholder={placeholderText}
    />
  );
}
