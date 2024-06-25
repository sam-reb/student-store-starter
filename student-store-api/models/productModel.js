const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all products
const getAllProducts = async (filter = {}, orderBy = {}) => {
  return prisma.product.findMany({
    where: filter,
    orderBy: orderBy,
  });
};

// get a product by its ID
const getProductById = async (id) => {
  return prisma.Product.findUnique({ where: { id: parseInt(id) } });
};

// create a product
const createProduct = async (productData) => {
  return prisma.Product.create({ data: productData });
};

// update a product
const updateProduct = async (id, productData) => {
  return prisma.Product.update({
    where: { id: parseInt(id) },
    data: productData,
  });
};

// delete a product
const deleteProduct = async (id) => {
  return prisma.Product.delete({ where: { id: parseInt(id) } });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
