export const testeProducts = [
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

export default async function loadProductsApi() {
  try {
    // const url = "https://slmxbp9p-8080.brs.devtunnels.ms";
    const url = "nada";
    const response = await fetch(url + "/api/produtos");

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log("API indisponível. Utilizando dados locais:", error);
    return testeProducts;
  }
}
