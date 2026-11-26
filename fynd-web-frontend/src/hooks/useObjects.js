import { useEffect, useState } from "react";
import getProductsApi from "../Services/objectsService";

export default function useObjects() {
  const [objectsList, setObjectsList] = useState([]);
  const [objectsError, setObjectsError] = useState(null);
  const [isObjectsLoading, setIsObjectLoading] = useState(false);

  async function getRequireProducts() {
    try {
      setIsObjectLoading(true);
      const response = await getProductsApi();
      setObjectsList(response);
    } catch (error) {
      setObjectsError(error);
    } finally {
      setIsObjectLoading(false);
    }
  }

  useEffect(() => {
    getRequireProducts();
  }, []);

  return { objectsList, objectsError, isObjectsLoading };
}
