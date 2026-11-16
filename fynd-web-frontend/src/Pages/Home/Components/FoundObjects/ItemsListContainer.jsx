import React from 'react'
import ObjectCard from './objectCard'
import "./objects-container.css";


export default function ItemsListContainer() {
  return (
    <div className='items-container'>
        <ObjectCard/>
        <ObjectCard/>
        <ObjectCard/>
        <ObjectCard/>
        <ObjectCard/>

     </div>
  )
}
