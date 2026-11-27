import React, { useState } from "react";
import FormInputBox from "../../../../Components/Form/FormInputBox";
import FilterContainer from "../../../../Components/Filters/FilterContainer";
import useCategories from "../../../../hooks/useCategories";
import Button from "../../../../Components/Button/Button";
import "./form-popup.css";
import PopupContainer from "../../../../Components/Popup/PopupContainer";

export default function RegisterItemPopup({ isPopupOpen, togglePopup }) {
  const {categoriesList, currentCategory, setCurrentCategory, categoryError, isCategoriesLoading} = useCategories("eletrônicos");

  function handleExpandPopup({target}) {
    console.log(handleExpandPopup)
  }


  return (
    <PopupContainer isPopupOpen={isPopupOpen} togglePopup={togglePopup}>
        <h1>Cadastrar objeto</h1>
      <FormInputBox
        inputId="name-input"
        labelText="Nome do objeto"
        type="text"
        placeholder="Ex.: Fones de ouvido sem fio pretos"
       
      />

      <div className="categories-register">
        <label>Categoria</label>

        <div className="categories-display">
          <FilterContainer
            currentFilter={currentCategory}
            filtersList={categoriesList}
            setFilter={setCurrentCategory}
          />
          <button className="create-category-btn" onClick={handleExpandPopup}>+ Nova categoria</button>
        </div>
      </div>

      <FormInputBox
        labelText="Data em que foi encontrado"
        inputId="date-input"
        type="date"
        placeholder="dd/mm/aaaa"
      />

      <FormInputBox
        labelText="Importar imagem"
        inputId="import-image-input"
        type="text"
        placeholder="Clique para importar imagem"
      />

      <FormInputBox
        inputId="local-input"
        type="text"
        labelText="Local onde foi encontrado"
        placeholder="Ex.: Cantina, bloco B…"
      />

      <FormInputBox
        inputId="description-input"
        type="text"
        labelText="Descrição"
        placeholder="Cor, marca, detalhes que ajudem o dono a reconhecer…"
      />

      <div className="bottom-popup">
        <Button text="Cancelar" subclass="black" onClick={togglePopup} />
        <Button text="Salvar" />
      </div>
    </PopupContainer>
  );
}
