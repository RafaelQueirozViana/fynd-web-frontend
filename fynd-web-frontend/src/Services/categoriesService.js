import axios from "axios";

// const url = "https://nswmd7fm-8080.brs.devtunnels.ms/api";
const url = "nadda";

const categoriesTest = ["eletrônico", "mochilas"];

export default async function getCategories() {
  try {
    const response = await axios.get(url + "/categorias");
    return response.data;
  } catch (error) {
    console.log(error + " Api error! using  the test categories");
    return categoriesTest;
  }
}
