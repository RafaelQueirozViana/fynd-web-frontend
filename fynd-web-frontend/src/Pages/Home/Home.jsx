import React from 'react';
import "./home.css";
import SearchInput from '../../Components/SearchInput/SearchInput';
import FilterContainer from '../../Components/Filters/FilterContainer';
import StatisticContainer from './Components/Statistics/StatisticContainer';
import ObjectContainer from './Components/FoundObjects/ItemsListContainer';
import ItemsListContainer from './Components/FoundObjects/ItemsListContainer';


const categoriesList = ['Todas', 'Eletrônicos', 'Documentos', 'Roupas', 'Acessórios', 'Chaves', 'Bolsas e mochilas', 'Outros'];


export default function Home() {
  return (
    <>
    <section className='top-section'>
    <div className="text-box">
      <h1>Perdeu algo? <br /> <span className='highlighted-title'>Talvez esteja aqui.</span> </h1>
      <p>Itens encontrados no campus ficam guardados aqui. Ache o seu, confirme que é dono e retire na secretaria.</p>
    <SearchInput/>
    </div>
    </section>

  <section className='categories-section'>
    <FilterContainer filtersList={categoriesList}/>
  </section>

  <section className='statistics-section'>
    <StatisticContainer/>
  </section>

  <section className='found-objects-section'>
    <h1 className='section-title'>Encontrados recentemente</h1>

  <ItemsListContainer/>


  </section>



    </>


  )
}
