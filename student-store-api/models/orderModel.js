const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all orders
const getAllOrders = async () => {
  return prisma.order.findMany({
    include: {
      order_items: true,
    },
  });
};

// get an order by its ID
const getOrderById = async (id) => {
  return prisma.order.findUnique({ where: { order_id: parseInt(id) } });
};

//make an order
const createOrder = async (orderData) => {
  return prisma.order.create({ data: orderData });
};

// update an order
const updateOrder = async (id, orderData) => {
  return prisma.order.update({
    where: { order_id: parseInt(id) },
    data: orderData,
  });
};

// delete an order
const deleteOrder = async (id) => {
  return prisma.order.delete({ where: { order_id: parseInt(id) } });
};

// add an item to an order
const addItemToOrder = async (orderId, orderItemData) => {
  const product = await prisma.product.findUnique({
    where: { id: orderItemData.product_id },
  });
  const order = await prisma.order.findUnique({
    where: { order_id: parseInt(orderId) },
  });
  await prisma.order.update({
    where: { order_id: parseInt(orderId) },
    data: {
      total_price:
        parseFloat(order.total_price) +
        parseFloat(product.price) * parseInt(orderItemData.quantity),
    },
  });
  return prisma.order_items.create({
    data: {
      order_id: parseInt(orderId),
      product_id: parseInt(orderItemData.product_id),
      quantity: parseInt(orderItemData.quantity),
      price: parseFloat(product.price) * parseInt(orderItemData.quantity),
    },
  });
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  addItemToOrder,
};
