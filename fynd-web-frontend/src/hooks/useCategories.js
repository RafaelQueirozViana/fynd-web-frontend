import { useState } from "react";

import getCategories from "../Services/categoriesService";

async function receiveCategories() {
  try {
    const response = await getCategories();
    return response;
  } catch (error) {
    console.log(error);
  }
}

console.log(receiveCategories());
function useCategories() {
  const [categoriesList, setCategories] = useState(receiveCategories());

  function createCategory(newCategory) {
    setCategories([...categoriesList, newCategory]);
  }

  return [categoriesList, createCategory];
}

export default useCategories;
