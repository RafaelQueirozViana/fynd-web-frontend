import React, { useState } from "react";
import SearchInput from "../../Components/SearchInput/SearchInput";
import FilterContainer from "../../Components/Filters/FilterContainer";
import Button from "../../Components/Button/Button";
import "./admin.css";
import ItemsListContainer from "../../Components/ItemsSection/ItemsListContainer";
import RegisterItemPopup from "./Components/FormPopup/RegisterItemPopup";

const statusList = ["aguardando dono", "devolvido"];

export default function Admin() {
  const [status, setStatus] = React.useState("aguardando dono");
  const [isPopupOpen, setPopupOpen] = useState(false);

  function setTogglePopup() {
    console.log("dasd");
    setPopupOpen(!isPopupOpen);
  }

  return (
    <>
      <section className="admin-top">
        <div className="text-box">
          <h1>Objetos cadastrados</h1>
          <p>6 no total · 5 aguardando dono · 1 devolvido</p>

          <nav className="objects-nav">
            <SearchInput placeholderText="Buscar objeto por nome ou local" />
            <FilterContainer
              filtersList={statusList}
              currentFilter={status}
              setFilter={setStatus}
            />
          </nav>
        </div>

        <Button onClick={setTogglePopup} text="Cadastrar Objeto" />
      </section>

      <section className="objects-display">
        <ItemsListContainer selectedFilter={status} orderBy="status">
          <div className="buttons-container">
            <Button text="Deletar" subclass="delete-btn" />
            <Button text="Alterar status" />
          </div>
        </ItemsListContainer>
      </section>

      <aside className="objects-update-popup">
        <RegisterItemPopup
          isPopupOpen={isPopupOpen}
          setPopupOpen={setTogglePopup}
        />
      </aside>
    </>
  );
}
