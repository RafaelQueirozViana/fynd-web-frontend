import axios from "axios";

const url = "https://nswmd7fm-8080.brs.devtunnels.ms/";

export const testeObjects = [
  {
    id: 1,
    imagemUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    nome: "relógio de pulso",
    categoria: "acessórios",
    encontradoEm: "Biblioteca",
    status: "aguardando dono",
  },
  {
    id: 2,
    imagemUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    nome: "tênis vermelho",
    categoria: "Calçados",
    encontradoEm: "Quadra esportiva",
    status: "aguardando dono",
  },
  {
    id: 3,
    imagemUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    nome: "fone de ouvido",
    categoria: "eletrônicos",
    encontradoEm: "Sala 12",
    status: "aguardando dono",
  },
  {
    id: 4,
    imagemUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    nome: "mochila preta",
    categoria: "acessórios",
    encontradoEm: "Refeitório",
    status: "aguardando dono",
  },
  {
    id: 5,
    imagemUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363",
    nome: "caderno",
    categoria: "Material escolar",
    encontradoEm: "Laboratório de informática",
    status: "devolvido",
  },
];

export default async function getProductsApi() {
  try {
    const response = await axios.get(url + "/api/produtos");
    return response.data;
  } catch (error) {
    console.log("API indisponível. Utilizando dados locais:", error);
    return testeObjects;
  }
}

export async function postObjectApi(itemToRegister) {
  try {
    const response = await axios.post(url + "/api/produtos", itemToRegister);

    return response.data;
  } catch (error) {
    console.log("HTTP POST ERROR: " + error);
    throw error;
  }
}
