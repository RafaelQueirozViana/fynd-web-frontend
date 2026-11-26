import axios from "axios";

// const url = "https://nswmd7fm-8080.brs.devtunnels.ms/api";
axios.defaults.url = "https://nswmd7fm-8080.brs.devtunnels.ms/api";

const statisticsTest = {
  perdidos: 2,
  devolvidos: 5,
  tempo: "2 dias",
};

export default async function getStatistics() {
  try {
    //  const response = await axios.get("/statisticas");
    // return response.data;
    return statisticsTest;
  } catch (error) {
    console.log("HTTP Error: " + error);
  }
}
