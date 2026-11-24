import React, { useState } from "react";
import FormInputBox from "./FormInputBox";
import FilterContainer from "../../../../Components/Filters/FilterContainer";
import useCategories from "../../../../hooks/useCategories";
import Button from "../../../../Components/Button/Button";
import "./form-popup.css";
import PopupContainer from "../../../../Components/Popup/PopupContainer";

export default function RegisterItemPopup({ isPopupOpen, setPopupOpen }) {
  const [categoriesList, createCategory] = useCategories();
  const [selectedCategoryBtn, setCategoryBtn] = useState("eletrônicos");

  return (
    <PopupContainer isPopupOpen={isPopupOpen}>
      <div className="top-popup">
        <h1>Cadastrar objeto</h1>
        <button className="close-popup-btn" onClick={setPopupOpen}>
          X
        </button>
      </div>

      <FormInputBox
        id="name-input"
        type="text"
        labelText="Nome do objeto"
        placeholderText="Ex.: Fones de ouvido sem fio pretos"
      />

      <div className="categories-register">
        <label>Categoria</label>

        <div className="categories-display">
          <FilterContainer
            currentFilter={selectedCategoryBtn}
            filtersList={categoriesList}
            setFilter={setCategoryBtn}
          />
          <button className="create-category-btn">+ Nova categoria</button>
        </div>
      </div>

      <FormInputBox
        id="date-input"
        type="date"
        labelText="Data em que foi encontrado"
        placeholderText="dd/mm/aaaa"
      />

      <FormInputBox
        id="import-image-input"
        type="text"
        labelText="Importar imagem"
        placeholderText="Clique para importar imagem"
      />

      <FormInputBox
        id="local-input"
        type="text"
        labelText="Local onde foi encontrado"
        placeholderText="Ex.: Cantina, bloco B…"
      />

      <FormInputBox
        id="description-input"
        type="text"
        labelText="Descrição"
        placeholderText="Cor, marca, detalhes que ajudem o dono a reconhecer…"
      />

      <div className="bottom-popup">
        <Button text="Cancelar" onClick={setPopupOpen} />
        <Button text="Salvar" />
      </div>
    </PopupContainer>
  );
}
