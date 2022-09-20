import productsModels from '../models/productsModels';

async function products(name: string, amount: string) {
  const product = await productsModels.products(name, amount);
  return product;
}

async function getProducts() {
  const product = await productsModels.getProducts();
  return product;
}

export default { products, getProducts };