const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// get all of the orders
router.get("/", orderController.getAllOrders);
// get an order by its specific ID
router.get("/:id", orderController.getOrderById);
// create a new order
router.post("/", orderController.createOrder);
// update an order
router.put("/:id", orderController.updateOrder);
// delete an order
router.delete("/:id", orderController.deleteOrder);

// add an item to an order
router.post("/:id/items", orderController.addItemsToOrder);
// get the total price of an order
router.get("/:id/total", orderController.getOrderTotal);
// delete an item from an order
// router.delete("/:id/items/:order_item_id", orderController.deleteItemFromOrder);

module.exports = router;
