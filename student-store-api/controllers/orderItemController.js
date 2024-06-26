// import orderItemModel
const orderItemModel = require("../models/orderItemModel");

// gets all items in an order
const getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await orderItemModel.getAllOrderItems();
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// gets a specific order item by its ID
const getOrderItemById = async (req, res) => {
  try {
    const orderItem = await orderItemModel.getOrderItemById(req.params.id);
    orderItem
      ? res.status(200).json(orderItem)
      : res.status(404).json({ error: "Item not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createOrderItem = async (req, res) => {
  try {
    const newOrderItem = await orderItemModel.createOrderItem(req.body);
    res.status(201).json(newOrderItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOrderItem = async (req, res) => {
  try {
    const updatedOrderItem = await orderItemModel.updateOrderItem(
      req.params.id,
      req.body
    );
    updatedOrderItem
      ? res.status(200).json(updatedOrderItem)
      : res.status(404).json({ error: "Order Item not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteOrderItem = async (req, res) => {
  try {
    const deletedOrderItem = await orderItemModel.deleteOrderItem(
      req.params.id
    );
    deletedOrderItem
      ? res.status(200).json(deletedOrderItem)
      : res.status(404).json({ error: "Order Item not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
};
