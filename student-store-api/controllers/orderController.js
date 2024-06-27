// import orderModel
const orderModel = require("../models/orderModel");

// gets all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// gets a specific order by its orderID
const getOrderById = async (req, res) => {
  try {
    const order = await orderModel.getOrderById(req.params.id);
    order
      ? res.status(200).json(order)
      : res.status(404).json({ error: "Order not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const newOrder = await orderModel.createOrder(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await orderModel.updateOrder(req.params.id, req.body);
    updatedOrder
      ? res.status(200).json(updatedOrder)
      : res.status(404).json({ error: "Order not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await orderModel.deleteOrder(req.params.id);
    deletedOrder
      ? res.status(200).json(deletedOrder)
      : res.status(404).json({ error: "Order not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addItemsToOrder = async (req, res) => {
  try {
    const addedOrderItem = await orderModel.addItemToOrder(
      req.params.id,
      req.body
    );
    addedOrderItem
      ? res.status(200).json(addedOrderItem)
      : res.status(404).json({ error: "cannot add item to order" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrderTotal = async (req, res) => {
  try {
    const order = await orderModel.getOrderTotal(req.params.id);
    order
      ? res.status(200).json(order)
      : res.status(404).json({ error: "Order not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const deleteItemFromOrder = async (req, res) => {
//   try {
//     const deletedOrderItem = await orderModel.deleteItemFromOrder(
//       req.params.id,
//       req.params.order_item_id
//     );
//     deletedOrderItem
//       ? res.status(200).json(deletedOrderItem)
//       : res
//           .status(400)
//           .json({ error: "The item you are trying to delete does not exist" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  addItemsToOrder,
  getOrderTotal,
};
