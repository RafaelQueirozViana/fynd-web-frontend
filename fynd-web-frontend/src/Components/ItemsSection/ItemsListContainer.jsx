import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "./objects-container.css";
import loadProductsApi from "../../Services/productsService";

export default function ItemsListContainer({
  selectedFilter,
  orderBy,
  onItemClick,
  children,
}) {
  const [itemsList, setProducts] = useState([]);

  async function loadProducts() {
    try {
      const productsList = await loadProductsApi();
      console.log(productsList);
      setProducts(productsList);
    } catch (error) {
      console.log("http error " + error);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const displayedItems =
    selectedFilter == "todas"
      ? itemsList
      : itemsList.filter((item) => item[orderBy] == selectedFilter);

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
