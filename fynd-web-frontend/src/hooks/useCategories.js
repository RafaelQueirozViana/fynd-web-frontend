import { useEffect, useState } from "react";
import getCategories from "../Services/categoriesService";

export function useCategories() {
  const [categoriesList, setCategoriesList] = useState("todas");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  async function getRequireCategories() {
    try {
      const response = await getCategories();
      setCategoriesList(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(true);
    }
  }

  useState(() => {
    getRequireCategories();
  }, []);

  return { categoriesList, setCategoriesList, error, isLoading };
}
