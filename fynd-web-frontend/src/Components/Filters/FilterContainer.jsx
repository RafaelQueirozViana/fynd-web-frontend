import React from "react";
import "./filter.css";
import FilterItem from "./FilterItem";

export default function FilterContainer({
  filtersList,
  currentFilter,
  setFilter,
}) {
  function changeFilter(filter) {
    setFilter(filter);
  }

  return (
    <ul className="filter-container">
      {filtersList.map((filter) => {
        return (
          <FilterItem
            key={filter}
            category={filter}
            isSelected={filter == currentFilter}
            onSelect={changeFilter}
          />
        );
      })}
    </ul>
  );
}
