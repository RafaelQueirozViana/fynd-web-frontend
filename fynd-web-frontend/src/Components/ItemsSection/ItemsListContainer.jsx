import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "./objects-container.css";
import loadObjectsApi from "../../Services/objectsService";
import { useObjects } from "../../hooks/useObjects";

export default function ItemsListContainer({
  selectedFilter,
  orderBy,
  onItemClick,
  children,
}) {

  const {objectsList, error, isLoading} = useObjects();

  const displayedItems =
    selectedFilter == "todas"
      ? objectsList
      : objectsList.filter((item) => item[orderBy] == selectedFilter);

  return (
    <div className="items-container">
      {displayedItems.map((object) => (
        <ItemCard
          key={object.id}
          item={object}
          onItemClick={onItemClick}
          extraContent={children}
        />
      ))}
    </div>
  );
}
