module.exports = async (req, res, next) => {
  const id = req.params.id;
  if (!isNaN(id)) {
    next();
  } else {
    const error = new Error("Invalid id");
    next(error);
  }
};
