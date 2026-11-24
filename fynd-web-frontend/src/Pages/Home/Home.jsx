import React, { useState } from "react";
import "./home.css";
import SearchInput from "../../Components/SearchInput/SearchInput";
import FilterContainer from "../../Components/Filters/FilterContainer";
import ItemsListContainer from "../../Components/ItemsSection/ItemsListContainer";
import PopupContainer from "../../Components/Popup/PopupContainer";
import StatisticContainer from "./Components/Statistics/StatisticContainer";
import useCategories from "../../hooks/useCategories";
import FormInputBox from "../../Components/Form/FormInputBox";
import Button from "../../Components/Button/Button";

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
        />
      </section>

      <aside className="focus-object-popup">
        <PopupContainer isPopupOpen={isPopupOpen}>
          <div className="object-info">
            <img src="" />
            <p>Categoria: Chaves</p>

            <div className="found-local">
              <div className="local-card">
                <p>ENCONTRADO EM</p>
                <p>Estacionamento bloco B</p>
              </div>

              <div className="local-card">
                <p>DATA</p>
                <p>04 de novembro de 2026</p>
              </div>
              <p>
                Duas chaves prateadas presas numa argola, encontradas no chão
                perto da vaga 12.
              </p>
              <p>Aguardando dono</p>
            </div>
          </div>
          <form action="#">
            <div className="owner-form">
              <div className="form-top">
                <p>Você é o dono?</p>
                <h2>Solicitar como possível dono</h2>
                <p>
                  Preencha seus dados. A secretaria confere e entra em contato
                  para combinar a retirada.
                </p>
              </div>

              <FormInputBox
                id="name-input"
                type="text"
                labelText="Seu nome completo *"
                placeholderText="Ex.: Maria Oliveira"
              />

              <FormInputBox
                id="contact-input"
                type="email"
                labelText="Contato (e-mail ou telefone) *"
                placeholderText="Ex.: maria@email.com"
              />

              <FormInputBox
                id="detail-input"
                type="text"
                labelText="Algum detalhe que só o dono saberia"
                placeholderText="Ex.: uma das chaves é do cadeado da bicicleta"
              />

              <div className="buttons-container">
                <Button
                  text="Cancelar"
                  subclass="black"
                  onClick={togglePopupOpen}
                />
                <Button text="Enviar solicitação" />
              </div>
            </div>
          </form>
        </PopupContainer>
      </aside>
    </>
  );
}
