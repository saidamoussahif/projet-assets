const Product = require("../models/ProductModel");
const asyncHandler = require("express-async-handler");


const getProducts = async (req, res) => {
  try {
    const prdt = await Product.find();
    res.json(prdt);
  } catch (err) {
    res.json({ message: err });
  }
};
 



// *****************************************************
const AddProducts = async (req, res) => {
  
  // console.log(req.body.Name);
  const Products = await Product.create({
    Name: req.body.Name,
    Price: req.body.Price,
    Image: req.body.Image,
    Description: req.body.Description,
  });
  res.status(200).json(Products);
};

// *****************************************************

const updateProduct = async (req, res) => {
  const Products = await Product.findById(req.params.id);
  !Products ? res.status(400) && Error("Product Not found") : null;
  const UpdatePdt = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(UpdatePdt);
};

// *****************************************************

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new error("Product not found");
  }
  await product.remove();

  res.status(200).json({ message: "Product deleted succefuly" });
});




module.exports = { getProducts, AddProducts, updateProduct, deleteProduct};
