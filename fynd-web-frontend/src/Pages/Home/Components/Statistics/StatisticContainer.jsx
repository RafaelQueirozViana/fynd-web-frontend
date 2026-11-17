import React from 'react'
import StatCard from './StatCard'
import "./statistics.css"

export default function StatisticContainer() {
  return (
    <div className='statistic-container'>
        <StatCard text="Objetos perdidos"/>
        <StatCard text="Devolvidos aos donos"/>
        <StatCard text="Tempo médio"/>
    </div>
  )
}
