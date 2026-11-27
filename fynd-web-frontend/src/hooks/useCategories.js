import { useEffect, useState } from "react";
import getCategories from "../Services/categoriesService";

export default function useCategories(defaultFilter) {
  const [categoriesList, setCategoriesList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(defaultFilter); // like "all" or "returned"
  const [categoryError, setCategoriesError] = useState(null);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);

  console.log(getCategories());
  async function getRequireCategories() {
    try {
      const response = await getCategories();
      console.log(response);

      setCategoriesList(response);
    } catch (error) {
      setCategoriesError(error);
    } finally {
      setIsCategoriesLoading(true);
    }
  }

  useEffect(() => {
    getRequireCategories();
  }, []);

  return {
    categoriesList,
    currentCategory,
    setCurrentCategory,
    categoryError,
    isCategoriesLoading,
  };
}
