const queries = require('../db/queries')

exports.getProducts = async (req, res, next) => {
  try {
    const products = await queries.getAll()
    res.status(201).json({
      type: 'success',
      products
    })
  } catch (error) {
    next(error)
  }
}

exports.getSingeProduct = async (req, res, next) => {
  const id = req.params.id
  try {
    if (!isNaN(id)) {
      const products = await queries.getAll()
      res.status(201).json({
        type: 'success',
        products
      })
    } else {
      const error = new Error("Invalid id")
      next(error)
    }
  } catch (error) {
    next(error)
  }
}