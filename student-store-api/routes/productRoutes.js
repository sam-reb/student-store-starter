const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");

// get all of the products
router.get("/", productController.getAllProducts);
// get product by ID
router.get("/:id", productController.getProductById);
// create a new product
router.post("/", productController.createProduct);
// update a product
router.put("/:id", productController.updateProduct);
// delete a product
router.delete("/:id", productController.deleteProduct);

// router.get("/", async (req, res) => {
//   const products = await prisma.product.findMany();
//   res.json(products);
// });

module.exports = router;
