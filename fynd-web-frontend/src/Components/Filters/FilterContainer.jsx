import React from 'react'
import "./filter.css"
import FilterItem from './FilterItem';


export default function FilterContainer({filtersList}) {
  return (
   <ul className='filter-container'>

  {filtersList.map(filter => <li key={filter}><FilterItem category={filter}/></li>)}
    
  
  
   </ul>
  )
}
