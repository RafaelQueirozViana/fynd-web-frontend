import { useState } from "react";

function useCategories() {
  const [categoriesList, setCategories] = useState([
    "todas",
    "eletrônicos",
    "documentos",
    "roupas",
    "acessórios",
    "chaves",
    "bolsas e mochilas",
    "outros",
  ]);

  function createCategory(newCategory) {
    setCategories([...categoriesList, newCategory]);
  }

  return [categoriesList, createCategory];
}

export default useCategories;
