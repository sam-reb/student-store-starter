const express = require("express");
require("dotenv").config();
const port = 3000;
const cors = require("cors");
const morgan = require("morgan");

// import routes files
const productRoutes = require("../routes/productRoutes");
const orderRoutes = require("../routes/orderRoutes");
const orderItemsRoutes = require("../routes/orderItemsRoutes");

// Middleware
const app = express();
app.use(cors()); // Emable CORS midleware to handle cross-origin requests
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// add product routes here
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/orderItems", orderItemsRoutes);

// app.get("/products", (req, res) => {
//   let filteredProducts = products;

//   //check if query has category
//   if (req.query.category) {
//     //filter products to have only the requested category
//     filteredProducts = filteredProducts.filter(
//       (product) =>
//         product.category.toLowerCase() === req.query.category.toLowerCase()
//     );
//   }
//   //check if query has category
//   if (req.query.id) {
//     //filter products to have only the requested category
//     filteredProducts = filteredProducts.find(
//       (product) => product.id === parseInt(req.product.id)
//     );
//   }

//   //send response for filteredProducts
//   res.json(filteredProducts);
// });

// Handle 404 Error - Not Found
app.use((req, res, next) => {
  console.log("jklljk");
  res
    .status(404)
    .send("Sorry, this page does not exist (Problem in server.js file)");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
