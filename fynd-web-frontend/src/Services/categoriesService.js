import axios from "axios";

const url = "https://nswmd7fm-8080.brs.devtunnels.ms/api";

export default async function getCategories() {
  try {
    const response = await axios.get(url + "/categorias");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
