import React, { useEffect, useState } from 'react'
import ObjectCard from './ObjectCard'
import "./objects-container.css";
import loadProductsApi from '../../../../Services/productsService';


export default function ItemsListContainer({selectedFilter}) {
  console.log(selectedFilter)
  const [itemsList, setProducts] = useState([]);

  async function loadProducts() {

    try {
    const data = await loadProductsApi();
    setProducts(data);
    }
    catch(error) {
      console.log(`Erro ao carregar produtos: ${error}`)
    }
  
  }

  useEffect(() => {
    loadProducts();
  }, []);


  const displayedItems = selectedFilter == "Todas" ? itemsList :
  itemsList.filter(item => item.categoria == selectedFilter);

  console.log(itemsList)

  return (
    <div className='items-container'>
      {displayedItems.map(object => <ObjectCard key={object.id} item={object}/>)}


        {/* <ObjectCard/> */}
     </div>
  )
}
