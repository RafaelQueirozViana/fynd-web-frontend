import React from 'react'

export default function StatCard({labelText, value}) {
  return (
    <div className="statistic-card">
        <p className='statistic-number'>{value}</p>
        <p>{labelText}</p>
    </div>
  )
}
