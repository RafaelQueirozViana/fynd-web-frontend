import React, { useEffect, useState } from 'react'
import ObjectCard from './ObjectCard'
import "./objects-container.css";
import loadProductsApi from '../../../../Services/productsService';


export default function ItemsListContainer() {
  const [productsList, setProducts] = useState([]);

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

  console.log(productsList)

  return (
    <div className='items-container'>
      {productsList.map(object => <ObjectCard key={object.id} item={object}/>)}


        {/* <ObjectCard/> */}
     </div>
  )
}
