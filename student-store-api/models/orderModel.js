const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all orders
const getAllOrders = async () => {
  return prisma.order.findMany();
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

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
