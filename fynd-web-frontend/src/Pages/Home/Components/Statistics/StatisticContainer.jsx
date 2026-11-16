import React from 'react'
import StatCard from './StatCard'
import "./statistics.css"

export default function StatisticContainer() {
  return (
    <div className='statistic-container'>
        <StatCard text="objetos atualmente perdidos"/>
        <StatCard text="objetos cadastrados no ano"/>
        <StatCard text="devolvidos aos donos"/>
    </div>
  )
}
