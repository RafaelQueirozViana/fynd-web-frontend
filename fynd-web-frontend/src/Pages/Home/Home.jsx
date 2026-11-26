import React, { useEffect, useState } from "react";
import "./home.css";
import SearchInput from "../../Components/SearchInput/SearchInput";
import FilterContainer from "../../Components/Filters/FilterContainer";
import ItemsListContainer from "../../Components/ItemsSection/ItemsListContainer";
import StatisticContainer from "./Components/Statistics/StatisticContainer";
import useCategories from "../../hooks/useCategories";
import useObjects from "../../hooks/useObjects";
import ItemPopup from "./Components/ItemFocusPopup/ItemPopup";




export default function Home() {
  const {categoriesList, currentCategory, setCurrentCategory, categoryError, isCategoriesLoading, } = useCategories();
  const {objectsList, objectsError, isObjectsLoading} = useObjects();


  const [isPopupOpen, setPopupOpen] = useState(false);

  const objetoTeste = {
    nome: "string",
    descricao: "string",
    quantidade: 0,
    imagemUrl: "string",
    encontradoEm: "string",
    dataEncontrado: "2026-11-25",
    categoria: "string",
    status: "AGUARDANDO_DONO",
  };

  function togglePopupOpen() {
    setPopupOpen(!isPopupOpen);
  }

  return ( 
    <>
      <section className="top-section">
        <div className="text-box">
          <h1>
            Perdeu algo? <br />{" "}
            <span className="highlighted-title">Talvez esteja aqui.</span>{" "}
          </h1>
          <p>
            Itens encontrados no campus ficam guardados aqui. Ache o seu,
            confirme que é dono e retire na secretaria.
          </p>
          <SearchInput id="find-item-input" type="text" />
        </div>
      </section>

      <section className="categories-section">
        <FilterContainer
          filtersList={["todas",...categoriesList]}
          currentFilter={currentCategory}
          setFilter={setCurrentCategory}
        />
      </section>

      <section className="statistics-section">
        <StatisticContainer />
      </section>

      <section className="found-objects-section">
        <h1 className="section-title">Encontrados recentemente</h1>
        <ItemsListContainer
          selectedFilter={currentCategory}
          orderBy="categoria"
          onItemClick={togglePopupOpen}
          itemsList={objectsList}
        />
      </section>

      <aside className="focus-object-popup">
        <ItemPopup
          isPopupOpen={isPopupOpen}
          togglePopupOpen={togglePopupOpen}
        />
      </aside>

      <button
        onClick={async () => {
          // try {
          //   const resposta = await postObjectRegister(objetoTeste);
          //   console.log("Sucesso:", resposta);
          //   alert("Deu certo! Produto cadastrado.");
          // } catch (erro) {
          //   console.error("Falhou:", erro);
          //   alert("Deu erro ao cadastrar! Olhe o console (F12).");
          // }
        }}
      >
        Clica pra teste
      </button>
    </>
  );
}
