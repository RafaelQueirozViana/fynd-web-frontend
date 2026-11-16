import React from 'react'

export default function FilterItem({category, isSelected, onSelect}) {
  
  return (
    <button className={"filter-item" + (isSelected ? " selected" : "")} onClick={() => onSelect(category)}   >{category}</button>
  )
}
