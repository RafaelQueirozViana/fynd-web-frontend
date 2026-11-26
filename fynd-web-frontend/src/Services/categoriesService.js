import axios from "axios";

//axios.defaults.baseURL = "https://nswmd7fm-8080.brs.devtunnels.ms/api";

axios.defaults.baseURL = "";

const categoriesTest = [
  "acessórios",
  "calçados",
  "eletrônicos",
  "bolsas e Sacolas",
  "material escolar",
];

export default async function getCategories() {
  try {
    const response = await axios.get("/categorias");
    return categoriesTest;
  } catch (error) {
    console.log(error + " Api error! using  the test categories");
    return categoriesTest;
  }
}
