import React from 'react'
import StatCard from './StatCard'
import "./statistics.css"
import useStatistics from '../../../../hooks/useStatistics'

export default function StatisticContainer() {
  const [statisticsData] = useStatistics();


  return (
    <div className='statistic-container'>
        <StatCard text="Objetos perdidos" value={statisticsData.perdidos}/>
        <StatCard text="Devolvidos aos donos" value={statisticsData.devolvidos}/>
        <StatCard text="Tempo médio" value={statisticsData.tempo}/>
    </div>
  )
}
