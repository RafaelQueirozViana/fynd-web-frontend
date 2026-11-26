import { useEffect, useState } from "react";
import getProductsApi from "../Services/objectsService";

export function useObjects() {
  const [objectsList, setObjectsList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getRequireProducts() {
    try {
      setIsLoading(true);
      const response = await getProductsApi();
      setObjectsList(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useState(() => {
    getRequireProducts();
  }, []);

  return { objectsList, error, isLoading };
}
