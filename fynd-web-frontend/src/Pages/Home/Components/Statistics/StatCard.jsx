import React from 'react'

export default function StatCard({text}) {
  return (
    <div className="statistic-card">
        <p className='statistic-number'>08</p>
        <p>{text}</p>
    </div>
  )
}
