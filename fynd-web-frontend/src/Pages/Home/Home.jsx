import React from 'react';
import "./home.css";
import SearchInput from '../../Components/SearchInput/SearchInput';
import FilterContainer from '../../Components/Filters/FilterContainer';
import StatisticContainer from './Components/Statistics/StatisticContainer';


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

  <section >
    <FilterContainer filtersList={categoriesList}/>
  </section>

  <section>
    <StatisticContainer/>

  </section>
    </>


  )
}
