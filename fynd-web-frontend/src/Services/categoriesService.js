import axios from "axios";

// const url = "https://nswmd7fm-8080.brs.devtunnels.ms/api";
const url = "";

const categoriesTest = [
  "acessórios",
  "calçados",
  "eletrônicos",
  "bolsas e Sacolas",
  "material escolar",
];

export default async function getCategories() {
  try {
    const response = await axios.get(url + "/categorias");
    return categoriesTest;
  } catch (error) {
    console.log(error + " Api error! using  the test categories");
    return categoriesTest;
  }
}
