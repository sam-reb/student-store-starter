// import productModel
const productModel = require("../models/productModel.js");

// function that gets all products
const getAllProducts = async (req, res) => {
  const { category, name, price } = req.query;
  let filter = {}; // filter object
  let orderBy = {}; // order by asc or desc

  // add wanted category to filter list
  if (category) filter.category = category;

  // sort by alphabetical order
  if (name) orderBy = { name: name === "asc" ? "asc" : "desc" };

  // sort by price by asc or desc if asked to in query
  if (price) orderBy = { price: price === "asc" ? "asc" : "desc" };

  try {
    const products = await productModel.getAllProducts(filter, orderBy);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productModel.getProductById(req.params.id);
    product
      ? res.status(200).json(product)
      : res.status(404).json({ error: "Product not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await productModel.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productModel.updateProduct(
      req.params.id,
      req.body
    );
    updatedProduct
      ? res.status(200).json(updatedProduct)
      : res.status(404).json({ error: "Product not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productModel.deleteProduct(req.params.id);
    deletedProduct
      ? res.status(200).json(deletedProduct)
      : res.status(404).json({ error: "Product not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
