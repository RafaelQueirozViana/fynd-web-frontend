import React from "react";
import "./admin.css";
import SearchInput from "../../Components/SearchInput/SearchInput";
import FilterContainer from "../../Components/Filters/FilterContainer";
import Button from "../../Components/Button/Button";

const statusList = ["Aguardando dono", "Devolvidos"];

export default function Admin() {
  const [status, setStatus] = React.useState("Aguardando dono");

  return (
    <>
      <section className="admin-top">
        <div className="text-box">
          <h1>Objetos cadastrados</h1>
          <p>6 no total · 5 aguardando dono · 1 devolvido</p>

          <nav>
            <SearchInput />
            <FilterContainer
              filtersList={statusList}
              currentFilter={status}
              setFilter={setStatus}
            />
          </nav>
        </div>

        <Button />
      </section>
    </>
  );
}
