import React, { useState } from "react";
import "./home.css";
import SearchInput from "../../Components/SearchInput/SearchInput";
import FilterContainer from "../../Components/Filters/FilterContainer";
import ItemsListContainer from "../../Components/ItemsSection/ItemsListContainer";
import PopupContainer from "../../Components/Popup/PopupContainer";
import StatisticContainer from "./Components/Statistics/StatisticContainer";
import useCategories from "../../hooks/useCategories";
import ItemPopup from "./Components/ItemFocusPopup/ItemPopup";

export default function Home() {
  const [categoriesList] = useCategories();
  const [selectedCategory, setSelectedCategory] = React.useState("todas");
  const [isPopupOpen, setPopupOpen] = useState(true);

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
          filtersList={["todas", ...categoriesList]}
          currentFilter={selectedCategory}
          setFilter={setSelectedCategory}
        />
      </section>

      <section className="statistics-section">
        <StatisticContainer />
      </section>

      <section className="found-objects-section">
        <h1 className="section-title">Encontrados recentemente</h1>
        <ItemsListContainer
          selectedFilter={selectedCategory}
          orderBy="categoria"
          onItemClick={togglePopupOpen}
        />
      </section>

      <aside className="focus-object-popup">
        <ItemPopup
          isPopupOpen={isPopupOpen}
          togglePopupOpen={togglePopupOpen}
        />
      </aside>
    </>
  );
}
