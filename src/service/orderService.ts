import ordersModels from '../models/ordersModels';

async function orders() {
  const order = ordersModels.orders();
  return order;
}

export default { orders };