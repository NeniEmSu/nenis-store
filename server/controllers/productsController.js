const queries = require("../db/queries");

function getProductFromBody(body) {
  const { title, description, image, price, quantity } = body;
  const product = {
    title,
    description,
    image,
    price,
    quantity,
  };
  return product;
}

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
    const product = getProductFromBody(req.body);
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
    const id = req.params.id;
    const product = getProductFromBody(req.body);
    await queries.update(id, product);
    res.status(204);
  } catch (error) {
    next(error);
  }
};
