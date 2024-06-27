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
  return prisma.order.findUnique({
    where: { order_id: parseInt(id) },
    include: {
      order_items: true,
    },
  });
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

const getOrderTotal = async (orderId) => {
  const order = await prisma.order.findUnique({
    where: { order_id: parseInt(orderId) },
  });
  return parseFloat(order.total_price);
};
//delete an item from an order
// const deleteItemFromOrder = async (orderId, orderItemId) => {
//   const orderItem = await prisma.order_items.findUnique({
//     where: { order_item_id: parseInt(orderItemId) },
//   });
//   const order = await prisma.order.findUnique({
//     where: { order_id: parseInt(orderId) },
//   });
//   await prisma.order.update({
//     where: { order_id: parseInt(orderId) },
//     data: {
//       total_price: parseFloat(order.total_price) - parseFloat(orderItem.price),
//     },
//   });
//   return prisma.order_items.delete({
//     where: { order_item_id: parseInt(orderItemId) },
//   });
// };

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  addItemToOrder,
  getOrderTotal,
};
