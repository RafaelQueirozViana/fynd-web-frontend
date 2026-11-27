import { useEffect, useState } from "react";
import getProductsApi, { deleteObjectApi } from "../Services/objectsService";

export default function useObjects() {
  const [objectsList, setObjectsList] = useState([]);
  const [objectsError, setObjectsError] = useState(null);
  const [isObjectsLoading, setIsObjectLoading] = useState(false);

  async function getRequireItems() {
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

  async function deleteRequireItem(id) {
    try {
      setIsObjectLoading(true);
      const response = await deleteObjectApi(id);
    } catch (error) {
      setObjectsError(error);
    } finally {
      setIsObjectLoading(false);
    }
  }

  useEffect(() => {
    getRequireItems();
  }, []);

  return { objectsList, objectsError, isObjectsLoading, deleteRequireItem };
}
