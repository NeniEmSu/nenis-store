const queries = require("../db/queries");

function isValidProduct(product) {
  let returnObj = {
    passed: false,
    error_message: "",
  };
  if (typeof product.title !== "string" || product.title.trim() === "") {
    returnObj.error_message = "invalid product title";
    return returnObj;
  } else if (isNaN(product.price) || product.price < 1) {
    returnObj.error_message = "invalid product price";
    return returnObj;
  } else if (isNaN(product.quantity)) {
    returnObj.error_message = "invalid product quantity";
    return returnObj;
  }
  returnObj.passed = true;
  return returnObj;
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
    const validationCheck = isValidProduct(req.body);
    if (validationCheck.passed === true) {
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
    } else {
      const error = new Error(validationCheck.error_message);
      next(error);
    }
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
