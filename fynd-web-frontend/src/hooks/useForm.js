import { useEffect, useState } from "react";

export default function useForm(currentCategory) {
  const currentData = new Date();
  const defaultData = {
    nome: "",
    descricao: "",
    quantidade: 0,
    imagemUrl: "",
    encontradoEm: "",
    dataEncontrado: currentData,
    categoria: currentCategory,
    status: "AGUARDANDO_DONO",
  };

  const [formData, setFormData] = useState(defaultData);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      categoria: currentCategory,
    }));
  }, [currentCategory]);

  const handleFormData = ({ target }) => {
    const { name, value } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return [formData, handleFormData];
}
