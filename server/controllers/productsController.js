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
    if (!isNaN(id)) {
      const product = await queries.getOne(id);
      // handle no product
      !product
        ? next()
        : res.status(200).json({
            type: "success",
            product,
          });
    } else {
      const error = new Error("Invalid id");
      next(error);
    }
  } catch (error) {
    next(error);
  }
};
