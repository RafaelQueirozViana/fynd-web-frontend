import React from "react";
import SearchInput from "../../Components/SearchInput/SearchInput";
import FilterContainer from "../../Components/Filters/FilterContainer";
import Button from "../../Components/Button/Button";
import "./admin.css";

const statusList = ["Aguardando dono", "Devolvidos"];

export default function Admin() {
  const [status, setStatus] = React.useState("Aguardando dono");

  return (
    <>
      <section className="admin-top">
        <div className="text-box">
          <h1>Objetos cadastrados</h1>
          <p>6 no total · 5 aguardando dono · 1 devolvido</p>

          <nav className="objects-nav">
            <SearchInput />
            <FilterContainer
              filtersList={statusList}
              currentFilter={status}
              setFilter={setStatus}
            />
          </nav>
        </div>

        <Button text="Cadastrar Objeto" />
      </section>
    </>
  );
}
