const express = require("express");
const router = express.Router();
const orderItemController = require("../controllers/orderItemController");

// get all of the items in an order
router.get("/", orderItemController.getAllOrderItems);
//get an order Item by its specific ID
router.get("/:id", orderItemController.getOrderItemById);
// create a new order item
router.post("/", orderItemController.createOrderItem);
// update an order Item
router.put("/:id", orderItemController.updateOrderItem);
// delete an order Item
router.delete("/:id", orderItemController.deleteOrderItem);

module.exports = router;
