import React, { useEffect, useState } from "react";
import ObjectCard from "./ObjectCard";
import "./objects-container.css";
import loadProductsApi from "../../../../Services/productsService";

export default function ItemsListContainer({ selectedFilter }) {
  const [itemsList, setProducts] = useState([]);

  async function loadProducts() {
    try {
      const productsList = await loadProductsApi();
      setProducts(productsList)
   
    } catch (error) {
      console.log("http error "+ error);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const displayedItems =
    selectedFilter == "Todas"
      ? itemsList
      : itemsList.filter((item) => item.categoria == selectedFilter);



  return (
    <div className="items-container">
      {displayedItems.map((object) => (
        <ObjectCard key={object.id} item={object} />
      ))}

      {/* <ObjectCard/> */}
    </div>
  );
}
