import React, { useState } from "react";
import FormInputBox from "./FormInputBox";
import FilterContainer from "../../../../Components/Filters/FilterContainer";
import useCategories from "../../../../hooks/useCategories";
import "./form-popup.css";

export default function RegisterItemPopup() {
  const [categoriesList, createCategory] = useCategories();
  const [selectedCategoryBtn, setCategoryBtn] = useState("eletrônicos");

  return (
    <div className="register-item-popup">
      <div className="top-popup">
        <h1>Cadastrar objeto</h1>
        <button className="close-popup-btn">X</button>
      </div>

      <FormInputBox
        id="object-name"
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
          <button className="create-category-btn">+ Nova cagegoria</button>
        </div>
      </div>
    </div>
  );
}
