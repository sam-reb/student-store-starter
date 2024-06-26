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

module.exports = router;
