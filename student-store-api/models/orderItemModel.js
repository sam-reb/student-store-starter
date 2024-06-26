const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//get all items in an order
const getAllOrderItems = async () => {
  return prisma.order_items.findMany();
};

// get an order item by its ID
const getOrderItemById = async (id) => {
  return prisma.order_items.findUnique({
    where: { order_item_id: parseInt(id) },
  });
};

//create an order item
const createOrderItem = async (orderItemData) => {
  return prisma.order_items.create({
    data: {
      order_id: parseInt(orderItemData.order_id),
      product_id: parseInt(orderItemData.product_id),
      quantity: parseInt(orderItemData.quantity),
      price: parseFloat(orderItemData.price),
    },
  });
};

const updateOrderItem = async (id, orderItemData) => {
  return prisma.order_items.update({
    where: { order_item_id: parseInt(id) },
    data: orderItemData,
  });
};

const deleteOrderItem = async (id) => {
  return prisma.order_items.delete({ where: { order_item_id: parseInt(id) } });
};

module.exports = {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
};
