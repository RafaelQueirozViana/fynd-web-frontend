import React from 'react';
import "./home.css";
import SearchInput from '../../Components/SearchInput/SearchInput';


export default function Home() {
  return (
    <section>
    <div className="text-box">
      <h1>Perdeu algo? <span className='highlighted-title'>Talvez esteja aqui.</span> </h1>
      <p>Itens encontrados no campus ficam guardados aqui. Ache o seu, confirme que é dono e retire na secretaria.</p>
    </div>

    <SearchInput/>
    <div className="filters-container">
      
    </div>
  
    </section>
  )
}
