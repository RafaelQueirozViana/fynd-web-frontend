import React from 'react'

export default function ObjectCard({item}) {
  return (
    <div className='object-card'>
       <div className="object-image" style={{backgroundImage: `url(${item.imagemUrl})`}}></div>
       <div className="object-info">
       <p className='object-name'>{item.nome}</p>
       <p className='object-category'>{item.categoria}</p>
       <p className='found-location'>Encontrada em: {item.encontradoEm}</p>
       </div>
    </div>
  )
}
