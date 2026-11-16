import React from 'react'
import "./filter.css"
import FilterItem from './FilterItem';


export default function FilterContainer({filtersArray}) {
  return (
   <ul className='filter-container'>
    <li><FilterItem category="Todas"/></li>
  
   </ul>
  )
}
