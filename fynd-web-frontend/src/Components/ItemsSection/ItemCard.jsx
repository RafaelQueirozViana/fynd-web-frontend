import React from "react";

export default function ItemCard({ item, onItemClick, extraContent }) {
  return (
    <div className="object-card" onClick={onItemClick}>
      <div
        className="object-image"
        style={{ backgroundImage: `url(${item.imagemUrl})` }}
      ></div>
      <div className="object-info">
        <p className="object-name">{item.nome}</p>
        <p className="object-category">{item.categoria}</p>
        <p className="found-location">Encontrada em: {item.encontradoEm}</p>
      </div>

      {extraContent ? extraContent : null}
    </div>
  );
}
