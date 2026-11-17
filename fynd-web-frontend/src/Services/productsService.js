export default async function loadProductsApi() {
  const url = "https://slmxbp9p-8080.brs.devtunnels.ms";
  
  const response = await fetch(url + "/api/produtos");

  if(!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`)
  }
   return await response.json();
}