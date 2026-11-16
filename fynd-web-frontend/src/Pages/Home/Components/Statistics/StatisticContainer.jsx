import React from 'react'
import StatCard from './StatCard'
import "./statistics.css"

export default function StatisticContainer() {
  return (
    <div className='statistic-container'>
        <StatCard text="Objetos atualmente perdidos"/>
        <StatCard text="Itens cadastrados no ano"/>
        <StatCard text="Devolvidos aos donos"/>
    </div>
  )
}
