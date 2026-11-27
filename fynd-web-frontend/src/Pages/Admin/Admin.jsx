import React, { useState } from "react";
import SearchInput from "../../Components/InputField/InputField";
import FilterContainer from "../../Components/Filters/FilterContainer";
import Button from "../../Components/Button/Button";
import "./admin.css";
import ItemsListContainer from "../../Components/ItemsSection/ItemsListContainer";
import RegisterItemPopup from "./Components/FormPopup/RegisterItemPopup";
import useObjects from "../../hooks/useObjects"
import usePopup from "../../hooks/usePopup";

const statusList = ["aguardando dono", "devolvido"];

export default function Admin() {
  const {objectsList, objectsError, isObjectsLoading } = useObjects(); 
  const [status, setStatus] = useState("aguardando dono");
  const {isPopupOpen, togglePopupOpen} = usePopup();


  return (
    <>
      <section className="admin-top">
        <div className="text-box">
          <h1>Objetos cadastrados</h1>
          <p>6 no total · 5 aguardando dono · 1 devolvido</p>

          <nav className="objects-nav">
            <SearchInput placeholder="Buscar objeto por nome ou local" />
            <FilterContainer
              filtersList={statusList}
              currentFilter={status}
              setFilter={setStatus}
            />
          </nav>
        </div>

        <Button onClick={togglePopupOpen} text="Cadastrar Objeto" />
      </section>

      <section className="objects-display">
        <ItemsListContainer selectedFilter={status} orderBy="status" itemsList={objectsList}>
          <div className="buttons-container">
            <Button text="Deletar" subclass="delete-btn" />
            <Button text="Alterar status" />
          </div>
        </ItemsListContainer>
      </section>

    {isPopupOpen != true ? null : (
      <aside className="objects-update-popup">
        <RegisterItemPopup
          isPopupOpen={isPopupOpen}
          togglePopup={togglePopupOpen}
        />
      </aside>
    )}

    </>
  );
}
