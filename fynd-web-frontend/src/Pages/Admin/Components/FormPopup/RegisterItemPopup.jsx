import React, { useState } from "react";
import FormInputBox from "../../../../Components/Form/FormInputBox";
import FilterContainer from "../../../../Components/Filters/FilterContainer";
import useCategories from "../../../../hooks/useCategories";
import Button from "../../../../Components/Button/Button";
import "./form-popup.css";
import PopupContainer from "../../../../Components/Popup/PopupContainer";
import useForm from "../../../../hooks/useForm";
import InputField from "../../../../Components/InputField/InputField";

export default function RegisterItemPopup({ isPopupOpen, togglePopup }) {
  const {categoriesList, currentCategory, setCurrentCategory, categoryError, isCategoriesLoading} = useCategories("eletrônicos");
  const [formItemData, handleFormData] = useForm(currentCategory);
  const [categoryOpened, setCategoryOpened] = useState(false);

  console.log(formItemData)

  return (
    <PopupContainer isPopupOpen={isPopupOpen} togglePopup={togglePopup}>

  <form onSubmit={(e) => { e.preventDefault(); }}>
    <div className="create-object-container">

        <h1>Cadastrar objeto</h1>
      <FormInputBox
        inputId="name-input"
        labelText="Nome do objeto"
        type="text"
        placeholder="Ex.: Fones de ouvido sem fio pretos"
        onChange={handleFormData}
        name="nome"
      />

      <div className="categories-register">
        <label>Categoria</label>

        <div className="categories-display">
          <FilterContainer
            currentFilter={currentCategory}
            filtersList={categoriesList}
            setFilter={setCurrentCategory}
          />
          <button className="create-category-btn" onClick={() => setCategoryOpened(!categoryOpened)}>{categoryOpened? "Cancelar" : "+ Nova categoria"}</button>

          <div className={"opened-inputbox" + (categoryOpened ? " visible" : "") }> 
            <InputField placeholder="Digite a nova categoria"/>
          </div>
        </div>
      </div>

      <FormInputBox
        labelText="Data em que foi encontrado"
        inputId="date-input"
        type="date"
        placeholder="dd/mm/aaaa"
        onChange={handleFormData}
        name="dataEncontrado"
      />

      <FormInputBox
        labelText="Importar imagem"
        inputId="import-image-input"
        type="text"
        placeholder="Clique para importar imagem"
        onChange={handleFormData}
        name="imagemUrl"
      />

      <FormInputBox
        inputId="local-input"
        type="text"
        labelText="Local onde foi encontrado"
        placeholder="Ex.: Cantina, bloco B…"
        onChange={handleFormData}
        name="encontradoEm"
      />

      <FormInputBox
        inputId="description-input"
        type="text"
        labelText="Descrição"
        placeholder="Cor, marca, detalhes que ajudem o dono a reconhecer…"
        onChange={handleFormData}
        name="descricao"
      />

      <div className="bottom-popup">
        <Button text="Cancelar" subclass="black" onClick={togglePopup} />
        <Button text="Salvar" />
      </div>
           </div>
          </form>
   
    </PopupContainer>
  
  
  );
}
