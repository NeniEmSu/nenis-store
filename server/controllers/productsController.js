const queries = require("../db/queries");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await queries.getAll();
    res.status(200).json({
      type: "success",
      products,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSingeProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await queries.getOne(id);
    // handle no product
    !product
      ? next()
      : res.status(200).json({
          type: "success",
          product,
        });
  } catch (error) {
    next(error);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    const { title, description, image, price, quantity } = req.body;
    const product = {
      title,
      description,
      image,
      price,
      quantity,
    };
    const createdProductId = await queries.create(product);
    res.status(201).json({
      type: "success",
      id: createdProductId,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    res.status(201).json({
      type: "success",
    });
  } catch (error) {
    next(error);
  }
};
