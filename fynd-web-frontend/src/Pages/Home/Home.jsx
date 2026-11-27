import React, { useEffect, useState } from "react";
import "./home.css";
import SearchInput from "./Components/SearchInput";
import FilterContainer from "../../Components/Filters/FilterContainer";
import ItemsListContainer from "../../Components/ItemsSection/ItemsListContainer";
import StatisticContainer from "./Components/Statistics/StatisticContainer";
import useCategories from "../../hooks/useCategories";
import useObjects from "../../hooks/useObjects";
import ItemViewerPopup from "./Components/ItemViewer/ItemViewerPopup";
import usePopup from "../../hooks/usePopup";

export default function Home() {

  // Category and objects list states
  const {categoriesList, currentCategory, setCurrentCategory, categoryError, isCategoriesLoading, } = useCategories("todas");

  console.log(categoriesList)
  const {objectsList, objectsError, isObjectsLoading} = useObjects();

  // Item viewer Popup State and selected object state
  const {isPopupOpen, togglePopupOpen} = usePopup();
  const [selectedObject, setSelectedObject] = useState(null);
  
  // Function that changes the default popup hook to increase the home's page rules
  function toggleItemViewer(itemOnView)  {
      togglePopupOpen(); // execulting the normal popup hook to set true or false for the 'popupOpen'
      setSelectedObject(itemOnView) // getting the item object as parameter provided by itemCard click execultion and setting this value on selectedObject state
  }


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
          <SearchInput id="find-item-input" type="text" placeholder="Procure itens perdidos pelo nome" />
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

      {/* Objects List Section */}

      <section className="found-objects-section">
        <h1 className="section-title">Encontrados recentemente</h1>
        <ItemsListContainer
          selectedFilter={currentCategory}
          orderBy="categoria"
          onItemClick={toggleItemViewer}
          itemsList={objectsList}
          setSelectedObject={setSelectedObject}
          
        />
      </section>

{selectedObject == null ? null: (
 <aside className="focus-object-popup">
        <ItemViewerPopup
          isPopupOpen={isPopupOpen}
          togglePopupOpen={toggleItemViewer}
          item={selectedObject}
        />
      </aside>



) }


     
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
