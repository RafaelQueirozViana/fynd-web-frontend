import React from 'react'
import "./filter.css"
import FilterItem from './FilterItem';



export default function FilterContainer({filtersList}) {

  const [selectedFilter, setSelectedFilter] = React.useState("Todas"); 

  function changeFilter(value) {
    setSelectedFilter(value)
  }

  return (
   <ul className='filter-container'>

  {filtersList.map(filter =>
     <li key={filter}><FilterItem category={filter} isSelected={selectedFilter == filter} onSelect={changeFilter} /></li>
     

     )}
    
  
  
   </ul>
  )
}
